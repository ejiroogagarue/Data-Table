import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {catchError, finalize, map, shareReplay, tap} from 'rxjs/operators';
import {Job} from '../models/job';
import {Table} from '../models/table';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  private tablesSubject = new BehaviorSubject<any>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();
  public data$ = this.tablesSubject.asObservable();
 private jobUrl = 'http://localhost:5002';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }
  // getJob(): Observable<any> {
  //   const url = `${this.jobUrl}/get-all-table-data`;
  //   return this.http.get<Job>(url).pipe(
  //     map((res: any) => res.data),
  //     shareReplay(),
  //     tap(res => console.log(res)),
  //   );
  // }


  getJobData(): Observable<Table[]> {
    // const url = `${this.jobUrl}/api/get-all-table-data`;
    const url = `/api/get-all-table-data`;
    this.loadingSubject.next(true);
    return this.http.get<Table[]>(url).pipe(
      tap(res => this.tablesSubject.next(res)),
      map(res => res['data']),
      catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))
    );
  }

//   this.tableService.getJobData().pipe(
//     tap(res => console.log(res)),
//   catchError(() => of([])),
//   finalize(() => this.loadingSubject.next(false))
// ).subscribe(data => {
//   this.dataSource._data.next(data);
//   this.dataSubject.next(data);
//   this.ref.detectChanges();
// });

  addJobData(element: Table): Observable<Table> {
    console.log(element);
    // const url = `${this.jobUrl}/api/submit-data`;
    const url = `/api/submit-data`;
    return this.http.post<Table>(url, element).pipe(
      tap(res => console.log(res))
    );
  }


  findLessons(filter = '', sortOrder = 'asc',
    pageNumber = 0, pageSize = 3): Observable<Table[]> {
    const url = `${this.jobUrl}/api/get-all-table-data`;
    return this.http.get(url , {
      params: new HttpParams()
        .set('filter', filter)
        .set('sortOrder', sortOrder)
        .set('pageNumber', pageNumber.toString())
        .set('pageSize', pageSize.toString())
    }).pipe(
      map(res =>  res['data']),
      tap(res => console.log(res))
    );
  }
}
