import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { DataTableComponent } from './mat-data-table/data-table/data-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatDatepickerModule,
  MatIconModule,
  MatInputModule, MatMenuModule, MatNativeDateModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule, MatTooltipModule
} from '@angular/material';



import {DragDropModule} from '@angular/cdk/drag-drop';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatDataTableComponent } from './mat-data-table/mat-data-table.component';

import { ColumnSorterComponent } from './mat-data-table/actions/column-sorter/column-sorter.component';

import { StylePaginatorDirective } from './mat-data-table/data-table/style-paginator.directive';



@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    MatDataTableComponent,
    ColumnSorterComponent,
    StylePaginatorDirective,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    DragDropModule,
    MatCheckboxModule,
    MatCardModule,
    FormsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
