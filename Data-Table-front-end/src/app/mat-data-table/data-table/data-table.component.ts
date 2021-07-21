import { ChangeDetectorRef, Component, NgZone, OnInit, ViewChild} from '@angular/core';
import {TableService} from '../../services/table.service';


import {MatPaginator, MatSort, MatTableDataSource, TooltipPosition} from '@angular/material';

import {Table} from '../../models/table';

import {animate, state, style, transition, trigger} from '@angular/animations';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { map, tap} from 'rxjs/operators';

import {BehaviorSubject, forkJoin, from, of} from 'rxjs';

import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class DataTableComponent implements OnInit {
  // Declare your subject
  private dataSubject = new BehaviorSubject<Table[]>([]);
  // Subject as Observable which you can subscribe to
  public tableData$ = this.dataSubject.asObservable();


  dataSource: any;
  expandedElement: Table | null;
  isEditEnable = false;
  @ViewChild(MatPaginator , {static: false}) paginator: MatPaginator;

  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);

 // getter for the date picker forms
  get fromDate() { return this.filterForm.get('fromDate').value; }
  get toDate() { return this.filterForm.get('toDate').value; }

  // use for table column-sorter
  displayedColumns: string[] = [
    'actions',
    'Ordernotes',
    'Customer',
  'JobNum',
  'Item',
  'Category',
  'HpCopy',
  'Tracking',
    'Die',
    'Plate',
    'Varnish',
    'Type',
    'Mat1',
    'Mat2',
    'Width1',
    'Width2',
    'TaskQty',
    'Press',
    'Msf',
    'Prodcode',
    'Shipdate',
   ];
  // capture tableCount from backend
 tableCount: any[];
 // use for table column-sorter
  displayedColumnsNames: string[] = [
    'actions',
    'Ordernotes',
    'Customer',
    'JobNum',
    'Item',
    'Category',
    'HpCopy',
    'Tracking',
    'Die',
    'Plate',
    'Varnish',
    'Type',
    'Mat1',
    'Mat2',
    'Width1',
    'Width2',
    'TaskQty',
    'Press',
    'Msf',
    'Prodcode',
    'Shipdate',
  ];

  // Date Filter Form
  filterForm = new FormGroup({
    fromDate: new FormControl(),
    toDate: new FormControl(),
  });

   // Table Data Form
   tableDataForm = this.fb.group({
  Ordernotes: '',
  Msf : '',
    });

  constructor(public tableService: TableService, private fb: FormBuilder, public zone: NgZone, private ref: ChangeDetectorRef) {}


  // on row click preview table data
  onRowClicked(element: Table) {
    this.tableDataForm.patchValue({
      Msf: element.Msf,
      Ordernotes: element.Ordernotes ,
    });
  }

  // search filter
  applySearchFilter(event: Event) {
    console.log(this.dataSource);
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  // date filter method
  applyDateFilter(value) {
    const fromDate = value.fromDate;
    const toDate = value.toDate;
    if ( fromDate === null || toDate === null ) {
      return this.dataSource.data;
    }
    this.dataSource.data =  this.dataSource.data.filter((item: Table) => {
        const date = new Date(item.Shipdate);
        console.log(date);
        return date >= fromDate &&
          date <= toDate;
    }
    ).sort(function compare(a: Table, b: Table) {
     const dateA = new Date(a.Shipdate);
     const dateB = new Date(b.Shipdate);
     return dateA.valueOf() - dateB.valueOf();
    }) ;
  }

  // submit order note when making new note or editing
  onSubmit() {
    this.tableService.addJobData(this.tableDataForm.value).subscribe(() => {
      this.loadData();
    });
  }

  // trigger the edit capability
  onEdit() {
    this.isEditEnable = !this.isEditEnable;
  }

   // load data from the http client
  loadData() {
    this.tableService.getJobData().subscribe(data => {
      this.dataSource._data.next(data);
      this.dataSubject.next(data);
      this.ref.detectChanges();
    });
    // Pass the  table data to material table data source
    this.tableData$.pipe().subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
    });

    this.tableService.data$.pipe(
      map(res => res.tableCount),
      tap( res => this.tableCount = res ),
      ).subscribe();
  }


  // change cell color based on number of times the property count exists
  getClassByValue(a: any) {
    for (let j = 0; j < this.tableCount.length; j++) {
      for (const property in this.tableCount[j]) {
        if (property === a) {
          return   this.countCheck(this.tableCount[j][property].count);
        }

      }
    }
  }
  // change color based on count
  countCheck(value) {
     if (value > 10) {
       return 'class-one';
     }
     switch (value) {

      case 2:
        return 'class-two';

      case 3:
        return 'class-three';
        case 4:
        return 'class-four';
        case 5:
        return 'class-five';
      case 6:
        return 'class-six';

      case 7:
        return 'class-seven';

      case 8:
        return 'class-eight';

      case 9:
        return 'class-eight';

      case 10:
        return 'class-eight';
        default:
        return('default');
    }


  }

  ngOnInit() {
    this.loadData();
  }


}
