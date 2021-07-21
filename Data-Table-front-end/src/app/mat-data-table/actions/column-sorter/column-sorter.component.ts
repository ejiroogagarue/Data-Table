import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ColumnInfo} from '../../../models/column-info';
import {ColumnSorterService} from './column-sorter.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {TooltipPosition} from '@angular/material';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'mat-table-column-sorter, button[mat-table-column-sorter]',
  templateUrl: './column-sorter.component.html',
  styleUrls: ['./column-sorter.component.css']
})
export class ColumnSorterComponent implements OnInit, AfterViewInit {
  // take data out of the component
  @Output()
  columnsChange: EventEmitter<string[]> = new EventEmitter<string[]>();
  // bring data into the component
  @Input()
  columns: string[];
  @Input()
  columnNames: string[];
  @Input()
  saveName?: string;

  columnInfo: ColumnInfo[];
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
  constructor(private elementRef: ElementRef, private columnSorterService: ColumnSorterService) { }
  ngOnInit() {
    this.columnInfo = this.columns.map((currElement, index) => {
      return {
        id: currElement,
        name: this.columnNames[index],
        hidden: false,
      };
    });
    this.columnInfo = this.columnSorterService.loadSavedColumnInfo(this.columnInfo, this.saveName);
    this.emitColumns(false);
  }

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.classList += 'va-mat-button-no-input';
  }

  columnMenuDropped(event: CdkDragDrop<any>): void {
    moveItemInArray(this.columnInfo, event.item.data.columnIndex, event.currentIndex);
    this.emitColumns(true);
  }

  toggleSelectedColumn(columnId: string) {
    const colFound = this.columnInfo.find(col => col.id === columnId);
    colFound.hidden = !colFound.hidden;
    this.emitColumns(true);
  }

  private emitColumns(saveColumns: boolean) {
    // Only emit the columns on the next animation frame available
    window.requestAnimationFrame(() => {
      this.columnsChange.emit(this.columnInfo.filter(colInfo => !colInfo.hidden).map(colInfo => colInfo.id));
      if (saveColumns) {
        this.columnSorterService.saveColumnInfo(this.columnInfo, this.saveName);
      }
    });
  }

  openDialog() {

  }
}
