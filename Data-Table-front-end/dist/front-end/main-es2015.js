(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-section\">\n\n\n  <div class=\"header-container\">\n    <h1 class=\"header\">Inventory Data table</h1>\n  </div>\n\n</div>\n\n\n\n<!--<app-table-design></app-table-design>-->\n\n<section >\n <div class=\"table-container\">\n   <app-data-table></app-data-table>\n </div>\n\n\n</section>\n\n\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/mat-data-table/actions/column-sorter/column-sorter.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mat-data-table/actions/column-sorter/column-sorter.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<button mat-button color=\"primary\" class=\"column-sorter-button\" [matMenuTriggerFor]=\"columnMenu\">\n  <ng-content></ng-content>\n</button>\n<mat-menu #columnMenu=\"matMenu\">\n\n  <div class=\"va-mat-table-dragable-container\" cdkDropList cdkDropListLockAxis=\"y\" cdkDropListOrientation=\"vertical\">\n    <div class=\"dragable-row\"\n\n         *ngFor=\"let column of columnInfo; let i = index\"\n         cdkDrag\n         [cdkDragData]=\"{columnIndex: i, columnTitle: column.id}\"\n         (cdkDragDropped)=\"columnMenuDropped($event)\">\n      <mat-icon   #tooltip=\"matTooltip\"\n                  matTooltip=\"Drag to Change Table Column\"\n                  [matTooltipPosition]=\"position.value\" cdkDragHandle>drag_indicator</mat-icon>\n      <mat-checkbox\n        #tooltip=\"matTooltip\"\n        matTooltip=\"Click To Show / Hide Column\"\n        [matTooltipPosition]=\"position.value\"\n        [disabled]=\"column.preventBeingHidden\"\n        [checked]=\"!column.hidden\"\n        (click)=\"$event.stopPropagation();\"\n        (change)=\"toggleSelectedColumn(column.id)\">\n        {{ column.name }}\n      </mat-checkbox>\n\n      <mat-card class=\"va-mat-table-drag-preview\" *cdkDragPreview>\n        <mat-icon>drag_indicator</mat-icon>\n        <mat-checkbox [checked]=\"!column.hidden\">\n          {{ column.name }}\n        </mat-checkbox>\n      </mat-card>\n    </div>\n  </div>\n</mat-menu>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/mat-data-table/data-table/data-table.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mat-data-table/data-table/data-table.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<mat-data-table></mat-data-table>-->\n\n\n<mat-data-table class=\"mat-elevation-z8  \">\n  <div class=\" action-section\">\n    <div class=\"action-elements\">\n\n\n      <div class=\"button-wrapper\">\n        <ng-container action-bar-items>\n          <button mat-table-column-sorter\n                  #tooltip=\"matTooltip\"\n                  matTooltip=\"Click to format table properties\"\n                  [matTooltipPosition]=\"position.value\"\n                  [(columns)]=\"displayedColumns\"\n                  [columnNames]=\"displayedColumnsNames\"\n                  [saveName]=\"'example-table'\" >\n            <mat-icon class=\"settings-icon\">filter_list</mat-icon>\n          Table Filter\n          </button>\n        </ng-container>\n      </div>\n        <div class=\"date-wrapper\">\n\n          <form class=\"date-block\" [formGroup]=\"filterForm\">\n\n            <div class=\"date-block\">\n              <mat-form-field>\n                <label>\n                  <input matInput\n                         [matDatepicker]=\"fromDate\"\n                         placeholder=\"From Date\"\n                         formControlName=\"fromDate\">\n                </label>\n                <mat-datepicker-toggle matSuffix [for]=\"fromDate\"  #tooltip=\"matTooltip\"\n                                       matTooltip=\"Click to Open the Date Picker\"\n                                       [matTooltipPosition]=\"position.value\"></mat-datepicker-toggle>\n                <mat-datepicker #fromDate ></mat-datepicker>\n              </mat-form-field>\n            </div>\n            <div class=\"date-block\">\n              <mat-form-field>\n                <label>\n                  <input matInput\n                         [matDatepicker]=\"toDate\"\n                         placeholder=\"To Date\"\n                         formControlName=\"toDate\">\n                </label>\n                <mat-datepicker-toggle matSuffix [for]=\"toDate\" #tooltip=\"matTooltip\"\n                                       matTooltip=\"Click to Open the Date Picker\"\n                                       [matTooltipPosition]=\"position.value\"></mat-datepicker-toggle>\n                <mat-datepicker #toDate></mat-datepicker>\n              </mat-form-field>\n            </div>\n            <div>\n              <button mat-button color=\"primary\" class=\"order-note-button-color mat-raised-button mat-button-base date-button\" #tooltip=\"matTooltip\"\n                      matTooltip=\"click on button to filter by date\"\n                      [matTooltipPosition]=\"position.value\" (click)=\"applyDateFilter(filterForm.value)\">Filter Date</button>\n            </div>\n\n          </form>\n        </div>\n      <div class=\"search-wrapper\">\n        <ng-container>\n\n          <div class=\"search-bar-section\">\n            <mat-icon class=\"fa fa-search\" >search</mat-icon>\n            <input type=\"search\" class=\"search-input\" matInput placeholder=\"Search Table\" (keyup)=\"applySearchFilter($event)\">\n\n          </div>\n\n\n        </ng-container>\n      </div>\n\n    </div>\n\n\n  </div>\n\n  <div >\n\n\n    <div class=\"spinner-container\" *ngIf=\"this.tableService.loading$ | async\">\n      <mat-spinner></mat-spinner>\n    </div>\n    <table mat-table\n           [dataSource]=\"dataSource\" multiTemplateDataRows\n           class=\"mat-elevation-z8 styled-table\">\n\n      <ng-container matColumnDef=\"actions\">\n        <th mat-header-cell *matHeaderCellDef [ngClass]=\"'th-font-size-16px'\">Action </th>\n        <td mat-cell *matCellDef=\"let element\">\n          <button mat-raised-button #tooltip=\"matTooltip\"\n                  matTooltip=\"Click to view order details\"\n                  [matTooltipPosition]=\"position.value\" class=\"order-note-button-color\"  (click)=\"expandedElement = expandedElement === element ? null : element\">\n            <mat-icon>description</mat-icon>\n            Order Details\n          </button>\n        </td>\n      </ng-container>\n      <ng-container matColumnDef=\"Customer\">\n        <th mat-header-cell *matHeaderCellDef [ngClass]=\"'th-font-size-16px'\"> Customer </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.Customer}} </td>\n      </ng-container>\n\n\n      <ng-container matColumnDef=\"JobNum\">\n        <th mat-header-cell *matHeaderCellDef [ngClass]=\"'th-font-size-16px'\"> Job Number </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.JobNum}} </td>\n      </ng-container>\n\n\n      <ng-container matColumnDef=\"Item\">\n        <th mat-header-cell *matHeaderCellDef [ngClass]=\"'th-font-size-16px'\"> Item </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.Item}} </td>\n      </ng-container>\n\n\n      <ng-container matColumnDef=\"Category\">\n        <th mat-header-cell *matHeaderCellDef [ngClass]=\"'th-font-size-16px'\"> Category </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.Category}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"HpCopy\">\n        <th mat-header-cell *matHeaderCellDef [ngClass]=\"'th-font-size-16px'\"> Hp Copy </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.HpCopy}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"Tracking\" >\n        <th mat-header-cell *matHeaderCellDef [ngClass]=\"'th-font-size-16px'\"> Tracking </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.Tracking}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"Die\">\n        <th mat-header-cell *matHeaderCellDef [ngClass]=\"'th-font-size-16px'\"> Die </th>\n        <td mat-cell *matCellDef=\"let element\" [ngClass]=\"getClassByValue(element.Die)\"> {{element.Die}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"Plate\">\n        <th mat-header-cell *matHeaderCellDef [ngClass]=\"'th-font-size-16px'\"> Plate </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.Plate}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"Varnish\">\n        <th mat-header-cell *matHeaderCellDef [ngClass]=\"'th-font-size-16px'\"> Varnish </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.Varnish}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"Type\">\n        <th mat-header-cell *matHeaderCellDef [ngClass]=\"'th-font-size-16px'\"> Type </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.Type}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"Mat1\">\n        <th mat-header-cell *matHeaderCellDef [ngClass]=\"'th-font-size-16px'\"> Material One </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.Mat1}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"Mat2\">\n        <th mat-header-cell *matHeaderCellDef [ngClass]=\"'th-font-size-16px'\"> Material Two </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.Mat2}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"Width1\">\n        <th mat-header-cell *matHeaderCellDef [ngClass]=\"'th-font-size-16px'\"> Width One </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.Width1}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"Width2\">\n        <th mat-header-cell *matHeaderCellDef [ngClass]=\"'th-font-size-16px'\"> Width Two </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.Width2}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"TaskQty\">\n        <th mat-header-cell *matHeaderCellDef [ngClass]=\"'th-font-size-16px'\"> Task Quantity </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.TaskQty}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"Press\">\n        <th mat-header-cell *matHeaderCellDef [ngClass]=\"'th-font-size-16px'\"> Press </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.Press}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"Msf\">\n        <th mat-header-cell *matHeaderCellDef [ngClass]=\"'th-font-size-16px'\"> Msf </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.Msf}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"Prodcode\">\n        <th mat-header-cell *matHeaderCellDef [ngClass]=\"'th-font-size-16px'\"> Product Code </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.Prodcode}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"Shipdate\">\n        <th mat-header-cell *matHeaderCellDef [ngClass]=\"'th-font-size-16px'\"> Ship Date </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.Shipdate | date: 'dd/MM/yyyy'}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"Ordernotes\" >\n        <th mat-header-cell *matHeaderCellDef  [ngClass]=\"'th-font-size-16px'\">\n          Order Notes </th>\n        <td mat-cell *matCellDef=\"let element\" > {{element.Ordernotes}} </td>\n      </ng-container>\n\n\n\n      <!-- Expanded Content Column - The detail row is made up of this one column that spans across all columns -->\n      <ng-container matColumnDef=\"expandedDetail\">\n        <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"displayedColumns.length\">\n          <div class=\"example-element-detail\"\n               [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\n            <div class=\"form-section\">\n              <div class=\"form-container\" *ngIf=\"!isEditEnable\">\n                <div>\n\n                  <div class=\"order-note-header\">\n                    <h2 class=\"order-note-title\">Order Notes</h2>\n                    <div class=\"edit-button-wrapper\">\n                      <button mat-raised-button color=\"primary\" class=\"edit-note-button\"  (click)=\"onEdit()\">Edit Note</button>\n                    </div>\n\n                  </div>\n\n\n                  <div *ngIf=\"!isEditEnable\" >\n                    <p  class=\"order-notes \"> {{element.Ordernotes}}</p>\n                  </div>\n\n\n                </div>\n\n\n              </div>\n              <!--   testing my form edit section-->\n              <div *ngIf=\"isEditEnable\" class=\"form-container no-background margin-left-20px\" >\n                <form [formGroup]=\"tableDataForm\"  >\n                  <div class=\"order-note-header\">\n                    <h2 class=\"order-note-title black-text\">Enter Order Notes:</h2>\n\n\n                    <!--                    <label>-->\n                    <!--                      <input type=\"text\" formControlName=\"Ordernotes\" required>-->\n                    <!--                    </label>-->\n\n                  </div>\n                  <label>\n\n                    <textarea class=\"order-note-text-area\" type=\"text\"  formControlName=\"Ordernotes\" required></textarea>\n                  </label>\n                  <!--                  <label>-->\n\n                  <!--&lt;!&ndash;                    <textarea class =\"text-area margin-right-20px\" formControlName=\"Ordernotes\"></textarea>&ndash;&gt;-->\n                  <!--                    <input type=\"text\" formControlName=\"Ordernotes\" required>-->\n                  <!--                  </label>-->\n                  <div class=\"edit-action-button-wrapper\">\n                    <button class=\"btn btn-primary margin-right-20px\" mat-raised-button color=\"warn\" (click)=\"onEdit()\"><mat-icon>cancel</mat-icon>Cancel</button>\n                    <button type=\"submit\" class=\"btn btn-primary edit-button-color\" mat-raised-button color=\"primary\" (click)=\"onSubmit(); onEdit()\">Enter  Note </button>\n\n                  </div>\n                </form>\n              </div>\n\n            </div>\n<div class=\"order-section\" >\n<!--  <div class=\"element-header\"> {{element.Customer}} </div>-->\n<div class=\"order-header\">\n  <div class=\"element-customer\"> {{element.Customer}} </div>\n  <div class =\"element-number\">\n    <div class=\"element-number\">\n      <p class=\"element-header\">Job Number:</p><p class=\"element-details\">{{element.JobNum}}</p>\n    </div>\n    <div class=\"element-number\">\n      <p class=\"element-header\">Ship Date:</p><p class=\"element-details\">{{element.Shipdate | date: 'dd/MM/yyyy'}}</p>\n    </div>\n\n  </div>\n\n</div>\n\n\n  <div class=\"order-details\">\n    <div class=\"column-one column-width\">\n      <div class=\"element-number border-bottom\">\n        <p class=\"element-header\">MSF Number</p><p class=\"element-details\">{{element.Msf}}</p>\n      </div>\n      <div class=\"element-number border-bottom\">\n        <p class=\"element-header\">Item Number</p><p class=\"element-details\">{{element.Item}}</p>\n      </div>\n      <div class=\"element-number border-bottom\">\n        <p class=\"element-header\">Category</p><p class=\"element-details\">{{element.Category}}</p>\n      </div>\n      <div class=\"element-number border-bottom\">\n        <p class=\"element-header\">HP Copy</p><p class=\"element-details\">{{element.HpCopy}}</p>\n      </div>\n\n    </div>\n\n    <div class=\"column-two column-width\">\n      <div class=\"element-number border-bottom\">\n        <p class=\"element-header\">Tracking</p><p class=\"element-details\">{{element.Tracking}}</p>\n      </div>\n      <div class=\"element-number border-bottom\">\n        <p class=\"element-header\">Die</p><p class=\"element-details\">{{element.Die}}</p>\n      </div>\n      <div class=\"element-number border-bottom\">\n        <p class=\"element-header\">Plate</p><p class=\"element-details\">{{element.Category}}</p>\n      </div>\n      <div class=\"element-number border-bottom\">\n        <p class=\"element-header\">Varnish</p><p class=\"element-details\">{{element.HpCopy}}</p>\n      </div>\n\n    </div>\n    <div class=\"column-three column-width\">\n      <div class=\"element-number border-bottom\">\n        <p class=\"element-header\">Type</p><p class=\"element-details\">{{element.Tracking}}</p>\n      </div>\n      <div class=\"element-number border-bottom\">\n        <p class=\"element-header\">Material One</p><p class=\"element-details\">{{element.Mat1}}</p>\n      </div>\n      <div class=\"element-number border-bottom\">\n        <p class=\"element-header\">Material Two</p><p class=\"element-details\">{{element.Mat2}}</p>\n      </div>\n      <div class=\"element-number border-bottom\">\n        <p class=\"element-header\">Width One</p><p class=\"element-details\">{{element.Width1}}</p>\n      </div>\n\n    </div>\n    <div class=\"column-Four column-width\">\n      <div class=\"element-number border-bottom\">\n        <p class=\"element-header\">Width Two</p><p class=\"element-details\">{{element.Width2}}</p>\n      </div>\n      <div class=\"element-number border-bottom\">\n        <p class=\"element-header\">Task Quantity</p><p class=\"element-details\">{{element.TaskQty}}</p>\n      </div>\n      <div class=\"element-number border-bottom\">\n        <p class=\"element-header\">Press</p><p class=\"element-details\">{{element.Press}}</p>\n      </div>\n      <div class=\"element-number border-bottom\">\n        <p class=\"element-header\">Production Code</p><p class=\"element-details\">{{element.Prodcode}}</p>\n      </div>\n\n    </div>\n  </div>\n\n\n\n</div>\n\n\n\n\n\n\n          </div>\n        </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let element; columns: displayedColumns;\"\n          class=\"example-element-row\"\n          (click)=\"onRowClicked(element)\"\n          [class.example-expanded-row]=\"expandedElement === element\"\n      >\n      </tr>\n      <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\" ></tr>\n    </table>\n\n    <mat-paginator style-paginator [pageSizeOptions]=\"[50,100,150]\" showFirstLastButtons></mat-paginator>\n  </div>\n</mat-data-table>\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/mat-data-table/mat-data-table.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mat-data-table/mat-data-table.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"action-bar\">\n\n  <ng-content></ng-content>\n  <ng-content select=\"ng-container[action-bar-items]\"></ng-content>\n</div>\n\n<ng-content></ng-content>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-large-1264px{\n  max-width: 1264px;\n  /*margin: auto;*/\n  padding-right: 20px;\n  padding-left: 20px;\n}\n\n.container-large-1440px {\n  max-width: 1440px;\n  margin: auto;\n  padding-right: 20px;\n  padding-left: 20px;\n}\n\n.font-family-inter {\n  font-family: 'Inter', sans-serif;\n}\n\n.font-size-18px {\n font-size: 18px;\n}\n\n.font-size-24px {\n  font-size: 24px;\n}\n\n.font-size-36px {\n  font-size: 36px;\n}\n\n.font-size-48px {\n  font-size: 48px;\n}\n\n.font-weight-700 {\n  font-weight: 700;\n}\n\n.font-weight-600 {\n  font-weight: 600;\n}\n\n.font-weight-500 {\n   font-weight: 500;\n}\n\n.font-weight-400 {\n  font-weight: 400;\n}\n\n.button-border-radius-6px {\n  border-radius: 6px;\n}\n\n.button-box-shadow {\n  box-shadow: 2px 6px 2px;\n}\n\n.button-background-color {\n  background-color: #0057B8;\n}\n\n.button-border-color {\n  border-color: white;\n}\n\n.button-text-color {\n  color : white;\n}\n\n.margin-bottom-20px {\n  margin-bottom: 20px;\n}\n\n.padding-top-24px {\n  padding-top: 24px;\n}\n\n.margin-top-16px {\n  margin-top: 16px;\n}\n\n.margin-top-36px {\n  margin-top: 36px;\n}\n\n/*<--------------------- Navigation Section -------------------------->*/\n\n.navigation-header {\n  max-width: 1264px;\n  margin: auto;\n  padding-left: 20px ;\n  padding-right: 20px;\n}\n\n.nav-grid {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  grid-gap: 16px;\n}\n\n.nav-logo{\n\n}\n\n.nav-menu{\n  display: flex;\n}\n\n.admin-button {\n  padding: 14px 34px;\n  background-color: #0057B8;\n  border-color: #0057B8 ;\n  color : white;\n}\n\n.button-wrapper {\n  margin-left: auto;\n}\n\n.table-container {\n\n  /*padding-right: 20px;*/\n  /*padding-left: 20px;*/\n\n  max-width: 100%;\n  overflow: auto;\n}\n\n.header-section {\n  display: flex;\n}\n\n.image-container {\n  width: 20%;\n}\n\n.logo {\n  width: 100%;\n  margin-top: 30px;\n}\n\n.header-container{\n  /*width: 50%;*/\n  margin: 0;\n  margin-left: 24px;\n  margin-top: 24px;\n}\n\n.header{\n  margin: 0;\n  font-family: 'Inter', sans-serif;\n  font-weight: 600;\n  font-size: 80px;\n  /*padding-bottom: 10px;*/\n  color: #0257FF;\n  /*border-bottom: 5px solid #0257ff;*/\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBQ0E7Q0FDQyxlQUFlO0FBQ2hCOztBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0dBQ0csZ0JBQWdCO0FBQ25COztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBLHdFQUF3RTs7QUFDeEU7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsK0JBQStCO0VBQy9CLGNBQWM7QUFDaEI7O0FBRUE7O0FBRUE7O0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBR0E7O0VBRUUsdUJBQXVCO0VBQ3ZCLHNCQUFzQjs7RUFFdEIsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsU0FBUztFQUNULGdDQUFnQztFQUNoQyxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHdCQUF3QjtFQUN4QixjQUFjO0VBQ2Qsb0NBQW9DO0FBQ3RDIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWxhcmdlLTEyNjRweHtcbiAgbWF4LXdpZHRoOiAxMjY0cHg7XG4gIC8qbWFyZ2luOiBhdXRvOyovXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLmNvbnRhaW5lci1sYXJnZS0xNDQwcHgge1xuICBtYXgtd2lkdGg6IDE0NDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG4uZm9udC1mYW1pbHktaW50ZXIge1xuICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcbn1cbi5mb250LXNpemUtMThweCB7XG4gZm9udC1zaXplOiAxOHB4O1xufVxuLmZvbnQtc2l6ZS0yNHB4IHtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuLmZvbnQtc2l6ZS0zNnB4IHtcbiAgZm9udC1zaXplOiAzNnB4O1xufVxuLmZvbnQtc2l6ZS00OHB4IHtcbiAgZm9udC1zaXplOiA0OHB4O1xufVxuLmZvbnQtd2VpZ2h0LTcwMCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4uZm9udC13ZWlnaHQtNjAwIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5mb250LXdlaWdodC01MDAge1xuICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5mb250LXdlaWdodC00MDAge1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLmJ1dHRvbi1ib3JkZXItcmFkaXVzLTZweCB7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cbi5idXR0b24tYm94LXNoYWRvdyB7XG4gIGJveC1zaGFkb3c6IDJweCA2cHggMnB4O1xufVxuLmJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTdCODtcbn1cbi5idXR0b24tYm9yZGVyLWNvbG9yIHtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbn1cbi5idXR0b24tdGV4dC1jb2xvciB7XG4gIGNvbG9yIDogd2hpdGU7XG59XG4ubWFyZ2luLWJvdHRvbS0yMHB4IHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5wYWRkaW5nLXRvcC0yNHB4IHtcbiAgcGFkZGluZy10b3A6IDI0cHg7XG59XG4ubWFyZ2luLXRvcC0xNnB4IHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cbi5tYXJnaW4tdG9wLTM2cHgge1xuICBtYXJnaW4tdG9wOiAzNnB4O1xufVxuXG4vKjwtLS0tLS0tLS0tLS0tLS0tLS0tLS0gTmF2aWdhdGlvbiBTZWN0aW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tPiovXG4ubmF2aWdhdGlvbi1oZWFkZXIge1xuICBtYXgtd2lkdGg6IDEyNjRweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHggO1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuLm5hdi1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcbiAgZ3JpZC1nYXA6IDE2cHg7XG59XG5cbi5uYXYtbG9nb3tcblxufVxuLm5hdi1tZW51e1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmFkbWluLWJ1dHRvbiB7XG4gIHBhZGRpbmc6IDE0cHggMzRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTdCODtcbiAgYm9yZGVyLWNvbG9yOiAjMDA1N0I4IDtcbiAgY29sb3IgOiB3aGl0ZTtcbn1cblxuLmJ1dHRvbi13cmFwcGVyIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cblxuLnRhYmxlLWNvbnRhaW5lciB7XG5cbiAgLypwYWRkaW5nLXJpZ2h0OiAyMHB4OyovXG4gIC8qcGFkZGluZy1sZWZ0OiAyMHB4OyovXG5cbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbn1cbi5oZWFkZXItc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uaW1hZ2UtY29udGFpbmVyIHtcbiAgd2lkdGg6IDIwJTtcbn1cbi5sb2dvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5oZWFkZXItY29udGFpbmVye1xuICAvKndpZHRoOiA1MCU7Ki9cbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tbGVmdDogMjRweDtcbiAgbWFyZ2luLXRvcDogMjRweDtcbn1cbi5oZWFkZXJ7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogODBweDtcbiAgLypwYWRkaW5nLWJvdHRvbTogMTBweDsqL1xuICBjb2xvcjogIzAyNTdGRjtcbiAgLypib3JkZXItYm90dG9tOiA1cHggc29saWQgIzAyNTdmZjsqL1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'front-end';
        this.catalogue = [
            {
                description: 'Body Wave Long',
                trending: true,
                price: 65
            },
            {
                description: 'Curl Bob',
                trending: false,
                price: 40
            },
            {
                description: 'Body Wave Bang',
                trending: true,
                price: 30
            },
        ];
        this.showStyle = false;
        this.myStyles = {
            'background-color': 'lime',
            'font-size': '20px',
            'font-weight': 'bold'
        };
    }
    getBackgroundColor() {
        if (this.showStyle) {
            return 'yellow';
        }
        else {
            return '';
        }
    }
    setMyStyles() {
        const styles = {
            'border-bottom': 'solid 2px lime',
            'font-size': '20px',
            'font-weight': 'bold'
        };
        return styles;
    }
    getClassByValue(value) {
        switch (value) {
            case "a": return "class-a";
            case "b": return "class-b";
        }
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _mat_data_table_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mat-data-table/data-table/data-table.component */ "./src/app/mat-data-table/data-table/data-table.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _mat_data_table_mat_data_table_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mat-data-table/mat-data-table.component */ "./src/app/mat-data-table/mat-data-table.component.ts");
/* harmony import */ var _mat_data_table_actions_column_sorter_column_sorter_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mat-data-table/actions/column-sorter/column-sorter.component */ "./src/app/mat-data-table/actions/column-sorter/column-sorter.component.ts");
/* harmony import */ var _mat_data_table_data_table_style_paginator_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./mat-data-table/data-table/style-paginator.directive */ "./src/app/mat-data-table/data-table/style-paginator.directive.ts");














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _mat_data_table_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_6__["DataTableComponent"],
            _mat_data_table_mat_data_table_component__WEBPACK_IMPORTED_MODULE_11__["MatDataTableComponent"],
            _mat_data_table_actions_column_sorter_column_sorter_component__WEBPACK_IMPORTED_MODULE_12__["ColumnSorterComponent"],
            _mat_data_table_data_table_style_paginator_directive__WEBPACK_IMPORTED_MODULE_13__["StylePaginatorDirective"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__["DragDropModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/mat-data-table/actions/column-sorter/column-sorter.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/mat-data-table/actions/column-sorter/column-sorter.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".va-mat-button-no-input {\n  border: none;\n  background: white;\n  outline: none;\n  padding: 8px;\n  /*background-color: white;*/\n}\n\n.va-mat-table-dragable-container {\n  min-width: 200px;\n}\n\n.va-mat-table-dragable-container .dragable-row {\n  width: 100%;\n  line-height: 14px;\n  font-size: 16px;\n  font-family: 'Inter', sans-serif;\n\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.va-mat-table-dragable-container .dragable-row mat-icon,\n.va-mat-table-dragable-container .dragable-row mat-checkbox {\n  vertical-align: top;\n}\n\n.va-mat-table-dragable-container .dragable-row mat-icon {\n  opacity: 0.15;\n  transition: opacity 0.5s;\n  margin-right: 8px;\n  padding-left: 4px;\n  color: #616161;\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n\n.va-mat-table-dragable-container .dragable-row:hover mat-icon {\n  opacity: 1;\n}\n\n.va-mat-table-drag-preview {\n  padding: 4px 8px 4px 4px !important;\n  cursor: -webkit-grabbing !important;\n  cursor: grabbing !important;\n  margin-top: -4px;\n  margin-left: -4px;\n  font-size: 14px;\n}\n\n.va-mat-table-drag-preview mat-icon,\n.va-mat-table-drag-preview mat-checkbox {\n  vertical-align: top;\n}\n\n.va-mat-table-drag-preview mat-icon {\n  margin-right: 8px;\n  padding-left: 4px;\n  color: #616161;\n}\n\n/* Animate items as they're being sorted. */\n\n.cdk-drop-list-dragging .cdk-drag {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n/* Animate an item that has been dropped. */\n\n.cdk-drag-animating {\n  transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.column-sorter-button{\n  /*background-color: white;*/\n  border-width: 0px;\n  position: relative;\n  font-family: 'Inter', sans-serif;\n  font-weight: 500;\n  /*padding: 8px 8px;*/\n  font-size: 24px;\n  color: white;\n  background-color: #0257FF;\n}\n\n.mat-checkbox-label {\n  font-size: 16px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0LWRhdGEtdGFibGUvYWN0aW9ucy9jb2x1bW4tc29ydGVyL2NvbHVtbi1zb3J0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLFlBQVk7RUFDWiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQ0FBZ0M7O0VBRWhDLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUNBOztFQUVFLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Qsb0JBQVk7RUFBWixZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsbUNBQTJCO0VBQTNCLDJCQUEyQjtFQUMzQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBQ0E7O0VBRUUsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBLDJDQUEyQzs7QUFDM0M7RUFDRSxzREFBc0Q7QUFDeEQ7O0FBRUEsMkNBQTJDOztBQUMzQztFQUNFLHNEQUFzRDtBQUN4RDs7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdDQUFnQztFQUNoQyxnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUdBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL21hdC1kYXRhLXRhYmxlL2FjdGlvbnMvY29sdW1uLXNvcnRlci9jb2x1bW4tc29ydGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmEtbWF0LWJ1dHRvbi1uby1pbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDhweDtcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsqL1xufVxuXG4udmEtbWF0LXRhYmxlLWRyYWdhYmxlLWNvbnRhaW5lciB7XG4gIG1pbi13aWR0aDogMjAwcHg7XG59XG4udmEtbWF0LXRhYmxlLWRyYWdhYmxlLWNvbnRhaW5lciAuZHJhZ2FibGUtcm93IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmO1xuXG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLnZhLW1hdC10YWJsZS1kcmFnYWJsZS1jb250YWluZXIgLmRyYWdhYmxlLXJvdyBtYXQtaWNvbixcbi52YS1tYXQtdGFibGUtZHJhZ2FibGUtY29udGFpbmVyIC5kcmFnYWJsZS1yb3cgbWF0LWNoZWNrYm94IHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cbi52YS1tYXQtdGFibGUtZHJhZ2FibGUtY29udGFpbmVyIC5kcmFnYWJsZS1yb3cgbWF0LWljb24ge1xuICBvcGFjaXR5OiAwLjE1O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXM7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBwYWRkaW5nLWxlZnQ6IDRweDtcbiAgY29sb3I6ICM2MTYxNjE7XG4gIGN1cnNvcjogZ3JhYjtcbn1cbi52YS1tYXQtdGFibGUtZHJhZ2FibGUtY29udGFpbmVyIC5kcmFnYWJsZS1yb3c6aG92ZXIgbWF0LWljb24ge1xuICBvcGFjaXR5OiAxO1xufVxuXG4udmEtbWF0LXRhYmxlLWRyYWctcHJldmlldyB7XG4gIHBhZGRpbmc6IDRweCA4cHggNHB4IDRweCAhaW1wb3J0YW50O1xuICBjdXJzb3I6IGdyYWJiaW5nICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IC00cHg7XG4gIG1hcmdpbi1sZWZ0OiAtNHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG4udmEtbWF0LXRhYmxlLWRyYWctcHJldmlldyBtYXQtaWNvbixcbi52YS1tYXQtdGFibGUtZHJhZy1wcmV2aWV3IG1hdC1jaGVja2JveCB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG4udmEtbWF0LXRhYmxlLWRyYWctcHJldmlldyBtYXQtaWNvbiB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBwYWRkaW5nLWxlZnQ6IDRweDtcbiAgY29sb3I6ICM2MTYxNjE7XG59XG5cbi8qIEFuaW1hdGUgaXRlbXMgYXMgdGhleSdyZSBiZWluZyBzb3J0ZWQuICovXG4uY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAuY2RrLWRyYWcge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cbi8qIEFuaW1hdGUgYW4gaXRlbSB0aGF0IGhhcyBiZWVuIGRyb3BwZWQuICovXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuLmNvbHVtbi1zb3J0ZXItYnV0dG9ue1xuICAvKmJhY2tncm91bmQtY29sb3I6IHdoaXRlOyovXG4gIGJvcmRlci13aWR0aDogMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICAvKnBhZGRpbmc6IDhweCA4cHg7Ki9cbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjU3RkY7XG59XG5cblxuLm1hdC1jaGVja2JveC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/mat-data-table/actions/column-sorter/column-sorter.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/mat-data-table/actions/column-sorter/column-sorter.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ColumnSorterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnSorterComponent", function() { return ColumnSorterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _column_sorter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./column-sorter.service */ "./src/app/mat-data-table/actions/column-sorter/column-sorter.service.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let ColumnSorterComponent = class ColumnSorterComponent {
    constructor(elementRef, columnSorterService) {
        this.elementRef = elementRef;
        this.columnSorterService = columnSorterService;
        // take data out of the component
        this.columnsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.positionOptions = ['below', 'above', 'left', 'right'];
        this.position = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.positionOptions[0]);
    }
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
    ngAfterViewInit() {
        this.elementRef.nativeElement.classList += 'va-mat-button-no-input';
    }
    columnMenuDropped(event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["moveItemInArray"])(this.columnInfo, event.item.data.columnIndex, event.currentIndex);
        this.emitColumns(true);
    }
    toggleSelectedColumn(columnId) {
        const colFound = this.columnInfo.find(col => col.id === columnId);
        colFound.hidden = !colFound.hidden;
        this.emitColumns(true);
    }
    emitColumns(saveColumns) {
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
};
ColumnSorterComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _column_sorter_service__WEBPACK_IMPORTED_MODULE_2__["ColumnSorterService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ColumnSorterComponent.prototype, "columnsChange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ColumnSorterComponent.prototype, "columns", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ColumnSorterComponent.prototype, "columnNames", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ColumnSorterComponent.prototype, "saveName", void 0);
ColumnSorterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'mat-table-column-sorter, button[mat-table-column-sorter]',
        template: __webpack_require__(/*! raw-loader!./column-sorter.component.html */ "./node_modules/raw-loader/index.js!./src/app/mat-data-table/actions/column-sorter/column-sorter.component.html"),
        styles: [__webpack_require__(/*! ./column-sorter.component.css */ "./src/app/mat-data-table/actions/column-sorter/column-sorter.component.css")]
    })
], ColumnSorterComponent);



/***/ }),

/***/ "./src/app/mat-data-table/actions/column-sorter/column-sorter.service.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/mat-data-table/actions/column-sorter/column-sorter.service.ts ***!
  \*******************************************************************************/
/*! exports provided: ColumnSorterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnSorterService", function() { return ColumnSorterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ColumnSorterService = class ColumnSorterService {
    loadSavedColumnInfo(columnInfo, saveName) {
        // Only load if a save name is passed in
        console.log(saveName);
        if (saveName) {
            if (!localStorage) {
                return;
            }
            const loadedInfo = localStorage.getItem(`${saveName}-columns`);
            if (loadedInfo) {
                return JSON.parse(loadedInfo);
            }
            this.saveColumnInfo(columnInfo);
            return columnInfo;
        }
    }
    saveColumnInfo(columnInfo, saveName) {
        // Only save if a save name is passed in
        if (saveName) {
            if (!localStorage) {
                return;
            }
            localStorage.setItem(`${saveName}-columns`, JSON.stringify(columnInfo));
        }
    }
};
ColumnSorterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ColumnSorterService);



/***/ }),

/***/ "./src/app/mat-data-table/data-table/data-table.component.css":
/*!********************************************************************!*\
  !*** ./src/app/mat-data-table/data-table/data-table.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.table-container{\n  height: 400px;\n  width: 550px;\n  max-width: 100%;\n  overflow: auto;\n}\n\n\n\n\n\n.order-note-button-color {\n  color: white;\n  background-color: #0257FF;\n}\n\n\n\n\n\n/*<------------------Grid Section------------------->*/\n\n\n\n\n\n.grid{\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr;\n}\n\n\n\n\n\n/*<------------------Action Section------------------->*/\n\n\n\n\n\n.action-section {\n  /*display: flex;*/\n}\n\n\n\n\n\n.action-elements {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr ;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n\n\n\n\n.date-button{\n  margin-top: 10px;\n  margin-left: 10px;\n}\n\n\n\n\n\n.date-block {\n  margin-left: 20px;\n}\n\n\n\n\n\n.container-large-test {\n  width: 450px;\n}\n\n\n\n\n\n.search-bar {\n  position: relative;\n}\n\n\n\n\n\n.search-icon {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n}\n\n\n\n\n\n.date-wrapper form {\n  display: flex;\n  justify-content: space-around;\n}\n\n\n\n\n\n.order-details {\n\n  display: grid;\n  grid-gap: 16px;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n}\n\n\n\n\n\n.order-information{\n  border-bottom: #3051D6 solid 1px;\n  border-top: #3051D6 solid 1px;\n  max-width: 30%;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n\n\n\n\n.element-customer{\n  font-family: 'Inter', sans-serif;\n  font-weight: 600;\n  font-size: 2rem;\n\n\n  padding: 0 0 0.25rem 0;\n\n}\n\n\n\n\n\n.example-element-detail {\n  overflow: hidden;\n  display: flex;\n}\n\n\n\n\n\n.example-element-diagram {\n  min-width: 80px;\n  border: 2px solid  black;\n  padding: 8px;\n  font-weight: lighter;\n  margin: 8px 0;\n  height: 104px;\n}\n\n\n\n\n\n/*.example-element-symbol {*/\n\n\n\n\n\n/*  font-weight: bold;*/\n\n\n\n\n\n/*  font-size: 40px;*/\n\n\n\n\n\n/*  line-height: normal;*/\n\n\n\n\n\n/*}*/\n\n\n\n\n\n.element-number {\n  display: flex;\n  justify-content: space-between;\n}\n\n\n\n\n\n.element-header {\n  font-family: 'Inter', sans-serif;\n  font-weight: 600;\n  font-size: 18px;\n\n  padding: 0 0 0.25rem 0;\n}\n\n\n\n\n\n.element-details {\n\n  margin-left: 10px;\n  font-size: 18px;\n  font-family: 'Inter', sans-serif;\n}\n\n\n\n\n\n.order-details {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n\n\n\n\n.order-header{\n  border-bottom: 10px solid black;\n  margin-bottom: 20px;\n}\n\n\n\n\n\n.border-bottom {\n  border-bottom: 2px solid black;\n\n  padding: 0.25rem 0;\n}\n\n\n\n\n\n.order-section {\n  margin-left: 24px;\n  margin-bottom: 10px;\n}\n\n\n\n\n\n.column-width {\n  width: 200px;\n}\n\n\n\n\n\n.form-section{\n /*margin-right: 250px;*/\n /* margin-left: auto;*/\n\n}\n\n\n\n\n\n.form-container {\nbackground-color: black;\n  width:550px;\nmargin-left: auto;\nmargin-right: 10px;\n  margin-top: 24px;\n  padding-bottom: 60px;\n}\n\n\n\n\n\ntextarea.input {\n  resize: vertical;\n}\n\n\n\n\n\n.order-notes {\n  color: white;\n  font-family: 'Inter', sans-serif;\n  font-weight: 600;\n  font-size: 18px;\n  margin-left: 20px;\n  margin-top: 20px;\n}\n\n\n\n\n\n.order-note-header {\n  display: flex;\n}\n\n\n\n\n\n.order-note-title{\n  color: white;\n  font-family: 'Inter', sans-serif;\n  font-weight: 600;\n  font-size: 40px;\n  margin-left: 20px;\n  border-bottom: 4px solid white;\n}\n\n\n\n\n\n.edit-button-wrapper {\n  /*margin-left: 20px;*/\n  /*margin-top: 24px;*/\n  margin-right: 21px;\n  margin-left: 165px;\n  margin-top: 32px;\n}\n\n\n\n\n\n.edit-action-button-wrapper{\n  margin-top: 20px;\n  margin-left: 20px;\n}\n\n\n\n\n\n.edit-note-button {\n  font-size: 16px;\n  background-color: rgba(0, 115, 204, 1);\n}\n\n\n\n\n\n.header-container {\n  width: 250px\n}\n\n\n\n\n\n.black-text {\n  color: black;\n  border-bottom: black;\n}\n\n\n\n\n\n.no-background {\n  background: none;\n}\n\n\n\n\n\n.margin-left-20px {\n  margin-left: 20px;\n}\n\n\n\n\n\n.margin-right-20px{\n margin-right: 20px;\n}\n\n\n\n\n\n/*\n-------------------------------\n\n TABLE SETTINGS\n\n\n---------------------------------\n*/\n\n\n\n\n\ntable {\n  width: 100%;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n}\n\n\n\n\n\n.th-font-size-16px{\n  font-size: 18px;\n\n  color: white;\n  background-color: #0257FF;\n\n}\n\n\n\n\n\n.mat-row {\n  height: auto;\n}\n\n\n\n\n\nth {\n  white-space: nowrap;\n  overflow: hidden;\n  color: #0057B8;\n  font-family: 'Inter', sans-serif;\n  font-weight: 700;\n\n\n}\n\n\n\n\n\ntd {\n  font-family: 'Inter', sans-serif;\n  font-weight: 500;\n  /*font-size: 16px;*/\n}\n\n\n\n\n\n.mat-header-cell {\n  width: auto;\n  padding: 8px 8px 8px 0;\n}\n\n\n\n\n\n.mat-header-cell:first-child {\n\n\n  border-top-left-radius: 20px;\n\n}\n\n\n\n\n\n.mat-header-cell:last-child {\n  border-top-right-radius: 20px;\n}\n\n\n\n\n\ntr.example-detail-row {\n  height: 0;\n}\n\n\n\n\n\ntr.example-element-row:not(.example-expanded-row):hover {\n  background: whitesmoke;\n}\n\n\n\n\n\ntr.example-element-row:not(.example-expanded-row):active {\n  background: #efefef;\n}\n\n\n\n\n\n.example-element-row td {\n  border-bottom-width: 0;\n  padding-bottom: 10px;\n  padding-top: 10px;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n\n\n\n\n.paragraph-section {\n  width: 250px\n}\n\n\n\n\n\nmat-paginator.mat-paginator-outer-container .mat-paginator-container {\n   display: flex;\njustify-content: space-evenly !important;\n}\n\n\n\n\n\n.order-note-text-area {\n  height: 200px;\n  font-size: 14pt;\n  width: 300px;\n\n  border-radius: 8px;\n  padding-left: 14px;\n  padding-right: 14px;\n  padding-top: 20px;\n  border-color: #0124B4;\n  font-family: 'Inter', sans-serif;\n  font-weight: 500;\n  margin-left: 20px;\n  line-height: 1.6;\n}\n\n\n\n\n\ntr.example-detail-row {\n  /* height: 0; */ /* no */\n  flex-basis: 0; /* yes */\n  min-height: initial; /* override mat-row styling */\n}\n\n\n\n\n\n/*\n-------------------------------\n\n SEARCH BAR SECTION\n\n---------------------------------\n*/\n\n\n\n\n\n.search-bar-section {\n  margin-left: 200px;\n  position: relative;\n  /*transform: translate(-50%,-50%);*/\n  /*transition: all 1s;*/\n  width: 50px;\n  /*height: 50px;*/\n  background: white;\n  box-sizing: border-box;\n  border-radius: 25px;\n  border: 2px solid #0073CC;\n  padding: 18px;\n}\n\n\n\n\n\ninput .search-input{\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;;\n  height: 42.5px;\n  line-height: 30px;\n  outline: 0;\n  border: 0;\n  display: none;\n  font-size: 1em;\n  border-radius: 20px;\n  padding: 0 20px;\n}\n\n\n\n\n\n.fa{\n  background: #0257FF;\n  box-sizing: border-box;\n  padding: 10px;\n  width: 42.5px;\n  height: 42.5px;\n  position: absolute;\n  top: 6px;\n  /*right: 2px;*/\n  border-radius: 50%;\n  color: white;\n  text-align: center;\n  font-size: 1.2em;\n  transition: all 1s;\n}\n\n\n\n\n\n.search-bar-section{\n  width: 300px;\n  cursor: pointer;\n  display:flex;\n\n  /*border: #0057B8 solid 2px ;*/\n  /*border-radius: 50%;*/\n}\n\n\n\n\n\n.search-bar-section input{\n  display: block;\n  background: white;\n  border-radius: 25px;\n  width:200px;\n  margin-left: 54px;\n  font-family: 'Inter', sans-serif;\n  font-weight: 500;\n  font-size: 18px;\n}\n\n\n\n\n\n.search-bar-section .fa{\n  background: #0257FF;\n  color: white;\n}\n\n\n\n\n\n.search-wrapper {\n  margin-left: auto;\n  margin-right: 20px;\n  /*margin-top: 20px;*/\n}\n\n\n\n\n\n/*\n-------------------------------\n\n\nBUTTON SETTINGS\n\n\n---------------------------------\n*/\n\n\n\n\n\n.button-wrapper{\n  margin-left: 10px;\n}\n\n\n\n\n\n.button-wrapper button {\n\n  border-color: transparent;\n  border-radius: 3rem;\n  padding: 8px 8px;\n  background-color: #0257FF;\n\n}\n\n\n\n\n\n.edit-button-color {\n  background-color: #0124B4;\n}\n\n\n\n\n\n.class-two {\n  background-color: #f93822;\n  color:white\n}\n\n\n\n\n\n.class-three {\n  background-color: blue;\n  color: white\n}\n\n\n\n\n\n.class-four {\n  background-color: #F85E00;\n  color: white\n}\n\n\n\n\n\n.class-five {\n  background-color: #C04CFD;\n  color: white\n}\n\n\n\n\n\n.class-six{\n  background-color: #FFC300;\n  color: white\n}\n\n\n\n\n\n.class-seven {\n  background-color: #5E0B15;\n  color: white\n}\n\n\n\n\n\n.class-eight {\n  background-color: #E40066;\n  color: white\n}\n\n\n\n\n\n.class-nine {\n  background-color: #00E038;\n  color: white\n}\n\n\n\n\n\n.class-ten {\n  background-color: #360568;\n  color: white\n}\n\n\n\n\n\n.class-one {\n  background-color: #002664;\n  color: white\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0LWRhdGEtdGFibGUvZGF0YS10YWJsZS9kYXRhLXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7Ozs7O0FBTUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOzs7Ozs7QUFNQSxzREFBc0Q7Ozs7OztBQUN0RDtFQUNFLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsK0JBQStCO0FBQ2pDOzs7Ozs7QUFHQSx3REFBd0Q7Ozs7OztBQUN4RDtFQUNFLGlCQUFpQjtBQUNuQjs7Ozs7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUNBQW1DO0VBQ25DLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7Ozs7OztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7Ozs7O0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7Ozs7OztBQUNBO0VBQ0UsWUFBWTtBQUNkOzs7Ozs7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7Ozs7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7QUFDWjs7Ozs7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0FBQy9COzs7Ozs7QUFTQTs7RUFFRSxhQUFhO0VBQ2IsY0FBYztFQUNkLHNDQUFzQztBQUN4Qzs7Ozs7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCOzs7Ozs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxnQkFBZ0I7RUFDaEIsZUFBZTs7O0VBR2Ysc0JBQXNCOztBQUV4Qjs7Ozs7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOzs7Ozs7QUFFQTtFQUNFLGVBQWU7RUFDZix3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsYUFBYTtBQUNmOzs7Ozs7QUFFQSw0QkFBNEI7Ozs7OztBQUM1Qix1QkFBdUI7Ozs7OztBQUN2QixxQkFBcUI7Ozs7OztBQUNyQix5QkFBeUI7Ozs7OztBQUN6QixJQUFJOzs7Ozs7QUFDSjtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7Ozs7OztBQUdBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGdCQUFnQjtFQUNoQixlQUFlOztFQUVmLHNCQUFzQjtBQUN4Qjs7Ozs7O0FBQ0E7O0VBRUUsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQ0FBZ0M7QUFDbEM7Ozs7OztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7Ozs7OztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLG1CQUFtQjtBQUNyQjs7Ozs7O0FBQ0E7RUFDRSw4QkFBOEI7O0VBRTlCLGtCQUFrQjtBQUNwQjs7Ozs7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOzs7Ozs7QUFDQTtFQUNFLFlBQVk7QUFDZDs7Ozs7O0FBQ0E7Q0FDQyx1QkFBdUI7Q0FDdkIsc0JBQXNCOztBQUV2Qjs7Ozs7O0FBQ0E7QUFDQSx1QkFBdUI7RUFDckIsV0FBVztBQUNiLGlCQUFpQjtBQUNqQixrQkFBa0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtBQUN0Qjs7Ozs7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7Ozs7OztBQUNBO0VBQ0UsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7Ozs7OztBQUNBO0VBQ0UsYUFBYTtBQUNmOzs7Ozs7QUFDQTtFQUNFLFlBQVk7RUFDWixnQ0FBZ0M7RUFDaEMsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsOEJBQThCO0FBQ2hDOzs7Ozs7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7Ozs7OztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7Ozs7O0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysc0NBQXNDO0FBQ3hDOzs7Ozs7QUFDQTtFQUNFO0FBQ0Y7Ozs7OztBQUNBO0VBQ0UsWUFBWTtFQUNaLG9CQUFvQjtBQUN0Qjs7Ozs7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7Ozs7OztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COzs7Ozs7QUFDQTtDQUNDLGtCQUFrQjtBQUNuQjs7Ozs7O0FBS0E7Ozs7Ozs7Q0FPQzs7Ozs7O0FBSUQ7RUFDRSxXQUFXO0VBQ1gsNEJBQTRCO0VBQzVCLDZCQUE2QjtBQUMvQjs7Ozs7O0FBS0E7RUFDRSxlQUFlOztFQUVmLFlBQVk7RUFDWix5QkFBeUI7O0FBRTNCOzs7Ozs7QUFDQTtFQUNFLFlBQVk7QUFDZDs7Ozs7O0FBR0E7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxnQ0FBZ0M7RUFDaEMsZ0JBQWdCOzs7QUFHbEI7Ozs7OztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7Ozs7OztBQUNDO0VBQ0MsV0FBVztFQUNYLHNCQUFzQjtBQUN4Qjs7Ozs7O0FBR0E7OztFQUdFLDRCQUE0Qjs7QUFFOUI7Ozs7OztBQUNBO0VBQ0UsNkJBQTZCO0FBQy9COzs7Ozs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7Ozs7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7Ozs7OztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOzs7Ozs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7Ozs7OztBQUNBO0VBQ0U7QUFDRjs7Ozs7O0FBQ0E7R0FDRyxhQUFhO0FBQ2hCLHdDQUF3QztBQUN4Qzs7Ozs7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFlBQVk7O0VBRVosa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixnQ0FBZ0M7RUFDaEMsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7Ozs7OztBQUVBO0VBQ0UsZUFBZSxFQUFFLE9BQU87RUFDeEIsYUFBYSxFQUFFLFFBQVE7RUFDdkIsbUJBQW1CLEVBQUUsNkJBQTZCO0FBQ3BEOzs7Ozs7QUFDQTs7Ozs7O0NBTUM7Ozs7OztBQUdEO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQ0FBbUM7RUFDbkMsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGFBQWE7QUFDZjs7Ozs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsU0FBUztFQUNULGFBQWE7RUFDYixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7Ozs7OztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsYUFBYTtFQUNiLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOzs7Ozs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTs7RUFFWiw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBQ3hCOzs7Ozs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZ0NBQWdDO0VBQ2hDLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOzs7Ozs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7Ozs7OztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEI7Ozs7OztBQUtBOzs7Ozs7OztDQVFDOzs7Ozs7QUFHRDtFQUNFLGlCQUFpQjtBQUNuQjs7Ozs7O0FBQ0E7O0VBRUUseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIseUJBQXlCOztBQUUzQjs7Ozs7O0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7Ozs7OztBQUdBO0VBQ0UseUJBQXlCO0VBQ3pCO0FBQ0Y7Ozs7OztBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCO0FBQ0Y7Ozs7OztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCO0FBQ0Y7Ozs7OztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCO0FBQ0Y7Ozs7OztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCO0FBQ0Y7Ozs7OztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCO0FBQ0Y7Ozs7OztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCO0FBQ0Y7Ozs7OztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCO0FBQ0Y7Ozs7OztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCO0FBQ0Y7Ozs7OztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYXQtZGF0YS10YWJsZS9kYXRhLXRhYmxlL2RhdGEtdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnRhYmxlLWNvbnRhaW5lcntcbiAgaGVpZ2h0OiA0MDBweDtcbiAgd2lkdGg6IDU1MHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG5cblxuXG5cbi5vcmRlci1ub3RlLWJ1dHRvbi1jb2xvciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyNTdGRjtcbn1cblxuXG5cblxuXG4vKjwtLS0tLS0tLS0tLS0tLS0tLS1HcmlkIFNlY3Rpb24tLS0tLS0tLS0tLS0tLS0tLS0tPiovXG4uZ3JpZHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcbn1cblxuXG4vKjwtLS0tLS0tLS0tLS0tLS0tLS1BY3Rpb24gU2VjdGlvbi0tLS0tLS0tLS0tLS0tLS0tLS0+Ki9cbi5hY3Rpb24tc2VjdGlvbiB7XG4gIC8qZGlzcGxheTogZmxleDsqL1xufVxuXG4uYWN0aW9uLWVsZW1lbnRzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciA7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5kYXRlLWJ1dHRvbntcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4uZGF0ZS1ibG9jayB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuLmNvbnRhaW5lci1sYXJnZS10ZXN0IHtcbiAgd2lkdGg6IDQ1MHB4O1xufVxuLnNlYXJjaC1iYXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2VhcmNoLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgbGVmdDogMTBweDtcbn1cblxuLmRhdGUtd3JhcHBlciBmb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cblxuXG5cblxuXG5cblxuLm9yZGVyLWRldGFpbHMge1xuXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtZ2FwOiAxNnB4O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcbn1cblxuLm9yZGVyLWluZm9ybWF0aW9ue1xuICBib3JkZXItYm90dG9tOiAjMzA1MUQ2IHNvbGlkIDFweDtcbiAgYm9yZGVyLXRvcDogIzMwNTFENiBzb2xpZCAxcHg7XG4gIG1heC13aWR0aDogMzAlO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbi5lbGVtZW50LWN1c3RvbWVye1xuICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAycmVtO1xuXG5cbiAgcGFkZGluZzogMCAwIDAuMjVyZW0gMDtcblxufVxuLmV4YW1wbGUtZWxlbWVudC1kZXRhaWwge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZXhhbXBsZS1lbGVtZW50LWRpYWdyYW0ge1xuICBtaW4td2lkdGg6IDgwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICBibGFjaztcbiAgcGFkZGluZzogOHB4O1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgbWFyZ2luOiA4cHggMDtcbiAgaGVpZ2h0OiAxMDRweDtcbn1cblxuLyouZXhhbXBsZS1lbGVtZW50LXN5bWJvbCB7Ki9cbi8qICBmb250LXdlaWdodDogYm9sZDsqL1xuLyogIGZvbnQtc2l6ZTogNDBweDsqL1xuLyogIGxpbmUtaGVpZ2h0OiBub3JtYWw7Ki9cbi8qfSovXG4uZWxlbWVudC1udW1iZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cblxuLmVsZW1lbnQtaGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcblxuICBwYWRkaW5nOiAwIDAgMC4yNXJlbSAwO1xufVxuLmVsZW1lbnQtZGV0YWlscyB7XG5cbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XG59XG5cbi5vcmRlci1kZXRhaWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ub3JkZXItaGVhZGVye1xuICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkIGJsYWNrO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmJvcmRlci1ib3R0b20ge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XG5cbiAgcGFkZGluZzogMC4yNXJlbSAwO1xufVxuLm9yZGVyLXNlY3Rpb24ge1xuICBtYXJnaW4tbGVmdDogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5jb2x1bW4td2lkdGgge1xuICB3aWR0aDogMjAwcHg7XG59XG4uZm9ybS1zZWN0aW9ue1xuIC8qbWFyZ2luLXJpZ2h0OiAyNTBweDsqL1xuIC8qIG1hcmdpbi1sZWZ0OiBhdXRvOyovXG5cbn1cbi5mb3JtLWNvbnRhaW5lciB7XG5iYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgd2lkdGg6NTUwcHg7XG5tYXJnaW4tbGVmdDogYXV0bztcbm1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgcGFkZGluZy1ib3R0b206IDYwcHg7XG59XG50ZXh0YXJlYS5pbnB1dCB7XG4gIHJlc2l6ZTogdmVydGljYWw7XG59XG4ub3JkZXItbm90ZXMge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLm9yZGVyLW5vdGUtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5vcmRlci1ub3RlLXRpdGxle1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDQwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgd2hpdGU7XG59XG4uZWRpdC1idXR0b24td3JhcHBlciB7XG4gIC8qbWFyZ2luLWxlZnQ6IDIwcHg7Ki9cbiAgLyptYXJnaW4tdG9wOiAyNHB4OyovXG4gIG1hcmdpbi1yaWdodDogMjFweDtcbiAgbWFyZ2luLWxlZnQ6IDE2NXB4O1xuICBtYXJnaW4tdG9wOiAzMnB4O1xufVxuLmVkaXQtYWN0aW9uLWJ1dHRvbi13cmFwcGVye1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5lZGl0LW5vdGUtYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDExNSwgMjA0LCAxKTtcbn1cbi5oZWFkZXItY29udGFpbmVyIHtcbiAgd2lkdGg6IDI1MHB4XG59XG4uYmxhY2stdGV4dCB7XG4gIGNvbG9yOiBibGFjaztcbiAgYm9yZGVyLWJvdHRvbTogYmxhY2s7XG59XG4ubm8tYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG4ubWFyZ2luLWxlZnQtMjBweCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuLm1hcmdpbi1yaWdodC0yMHB4e1xuIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuXG5cblxuLypcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuIFRBQkxFIFNFVFRJTkdTXG5cblxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuXG5cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG59XG5cblxuXG5cbi50aC1mb250LXNpemUtMTZweHtcbiAgZm9udC1zaXplOiAxOHB4O1xuXG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyNTdGRjtcblxufVxuLm1hdC1yb3cge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cblxudGgge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjb2xvcjogIzAwNTdCODtcbiAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG5cblxufVxuXG50ZCB7XG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICAvKmZvbnQtc2l6ZTogMTZweDsqL1xufVxuIC5tYXQtaGVhZGVyLWNlbGwge1xuICB3aWR0aDogYXV0bztcbiAgcGFkZGluZzogOHB4IDhweCA4cHggMDtcbn1cblxuXG4ubWF0LWhlYWRlci1jZWxsOmZpcnN0LWNoaWxkIHtcblxuXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XG5cbn1cbi5tYXQtaGVhZGVyLWNlbGw6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xufVxuXG50ci5leGFtcGxlLWRldGFpbC1yb3cge1xuICBoZWlnaHQ6IDA7XG59XG5cbnRyLmV4YW1wbGUtZWxlbWVudC1yb3c6bm90KC5leGFtcGxlLWV4cGFuZGVkLXJvdyk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xufVxuXG50ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG59XG5cbi5leGFtcGxlLWVsZW1lbnQtcm93IHRkIHtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuLnBhcmFncmFwaC1zZWN0aW9uIHtcbiAgd2lkdGg6IDI1MHB4XG59XG5tYXQtcGFnaW5hdG9yLm1hdC1wYWdpbmF0b3Itb3V0ZXItY29udGFpbmVyIC5tYXQtcGFnaW5hdG9yLWNvbnRhaW5lciB7XG4gICBkaXNwbGF5OiBmbGV4O1xuanVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHkgIWltcG9ydGFudDtcbn1cbi5vcmRlci1ub3RlLXRleHQtYXJlYSB7XG4gIGhlaWdodDogMjAwcHg7XG4gIGZvbnQtc2l6ZTogMTRwdDtcbiAgd2lkdGg6IDMwMHB4O1xuXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZy1sZWZ0OiAxNHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNHB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgYm9yZGVyLWNvbG9yOiAjMDEyNEI0O1xuICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG59XG5cbnRyLmV4YW1wbGUtZGV0YWlsLXJvdyB7XG4gIC8qIGhlaWdodDogMDsgKi8gLyogbm8gKi9cbiAgZmxleC1iYXNpczogMDsgLyogeWVzICovXG4gIG1pbi1oZWlnaHQ6IGluaXRpYWw7IC8qIG92ZXJyaWRlIG1hdC1yb3cgc3R5bGluZyAqL1xufVxuLypcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuIFNFQVJDSCBCQVIgU0VDVElPTlxuXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG5cblxuLnNlYXJjaC1iYXItc2VjdGlvbiB7XG4gIG1hcmdpbi1sZWZ0OiAyMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvKnRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7Ki9cbiAgLyp0cmFuc2l0aW9uOiBhbGwgMXM7Ki9cbiAgd2lkdGg6IDUwcHg7XG4gIC8qaGVpZ2h0OiA1MHB4OyovXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDA3M0NDO1xuICBwYWRkaW5nOiAxOHB4O1xufVxuXG5pbnB1dCAuc2VhcmNoLWlucHV0e1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7O1xuICBoZWlnaHQ6IDQyLjVweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIG91dGxpbmU6IDA7XG4gIGJvcmRlcjogMDtcbiAgZGlzcGxheTogbm9uZTtcbiAgZm9udC1zaXplOiAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDAgMjBweDtcbn1cblxuLmZhe1xuICBiYWNrZ3JvdW5kOiAjMDI1N0ZGO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogNDIuNXB4O1xuICBoZWlnaHQ6IDQyLjVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDZweDtcbiAgLypyaWdodDogMnB4OyovXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIHRyYW5zaXRpb246IGFsbCAxcztcbn1cblxuLnNlYXJjaC1iYXItc2VjdGlvbntcbiAgd2lkdGg6IDMwMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6ZmxleDtcblxuICAvKmJvcmRlcjogIzAwNTdCOCBzb2xpZCAycHggOyovXG4gIC8qYm9yZGVyLXJhZGl1czogNTAlOyovXG59XG5cbi5zZWFyY2gtYmFyLXNlY3Rpb24gaW5wdXR7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgd2lkdGg6MjAwcHg7XG4gIG1hcmdpbi1sZWZ0OiA1NHB4O1xuICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uc2VhcmNoLWJhci1zZWN0aW9uIC5mYXtcbiAgYmFja2dyb3VuZDogIzAyNTdGRjtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnNlYXJjaC13cmFwcGVyIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgLyptYXJnaW4tdG9wOiAyMHB4OyovXG59XG5cblxuXG5cbi8qXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuQlVUVE9OIFNFVFRJTkdTXG5cblxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuXG5cbi5idXR0b24td3JhcHBlcntcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4uYnV0dG9uLXdyYXBwZXIgYnV0dG9uIHtcblxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAzcmVtO1xuICBwYWRkaW5nOiA4cHggOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI1N0ZGO1xuXG59XG4uZWRpdC1idXR0b24tY29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEyNEI0O1xufVxuXG5cbi5jbGFzcy10d28ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjkzODIyO1xuICBjb2xvcjp3aGl0ZVxufVxuLmNsYXNzLXRocmVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbiAgY29sb3I6IHdoaXRlXG59XG5cbi5jbGFzcy1mb3VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y4NUUwMDtcbiAgY29sb3I6IHdoaXRlXG59XG5cbi5jbGFzcy1maXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0MwNENGRDtcbiAgY29sb3I6IHdoaXRlXG59XG5cbi5jbGFzcy1zaXh7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkMzMDA7XG4gIGNvbG9yOiB3aGl0ZVxufVxuLmNsYXNzLXNldmVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVFMEIxNTtcbiAgY29sb3I6IHdoaXRlXG59XG5cbi5jbGFzcy1laWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFNDAwNjY7XG4gIGNvbG9yOiB3aGl0ZVxufVxuXG4uY2xhc3MtbmluZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMEUwMzg7XG4gIGNvbG9yOiB3aGl0ZVxufVxuXG4uY2xhc3MtdGVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2MDU2ODtcbiAgY29sb3I6IHdoaXRlXG59XG4uY2xhc3Mtb25lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMjY2NDtcbiAgY29sb3I6IHdoaXRlXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/mat-data-table/data-table/data-table.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/mat-data-table/data-table/data-table.component.ts ***!
  \*******************************************************************/
/*! exports provided: DataTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableComponent", function() { return DataTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_table_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/table.service */ "./src/app/services/table.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");








let DataTableComponent = class DataTableComponent {
    constructor(tableService, fb, zone, ref) {
        this.tableService = tableService;
        this.fb = fb;
        this.zone = zone;
        this.ref = ref;
        // Declare your subject
        this.dataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]([]);
        // Subject as Observable which you can subscribe to
        this.tableData$ = this.dataSubject.asObservable();
        this.isEditEnable = false;
        this.positionOptions = ['below', 'above', 'left', 'right'];
        this.position = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.positionOptions[0]);
        // use for table column-sorter
        this.displayedColumns = [
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
        // use for table column-sorter
        this.displayedColumnsNames = [
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
        this.filterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            fromDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            toDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
        });
        // Table Data Form
        this.tableDataForm = this.fb.group({
            Ordernotes: '',
            Msf: '',
        });
    }
    // getter for the date picker forms
    get fromDate() { return this.filterForm.get('fromDate').value; }
    get toDate() { return this.filterForm.get('toDate').value; }
    // on row click preview table data
    onRowClicked(element) {
        this.tableDataForm.patchValue({
            Msf: element.Msf,
            Ordernotes: element.Ordernotes,
        });
    }
    // search filter
    applySearchFilter(event) {
        console.log(this.dataSource);
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    // date filter method
    applyDateFilter(value) {
        const fromDate = value.fromDate;
        const toDate = value.toDate;
        if (fromDate === null || toDate === null) {
            return this.dataSource.data;
        }
        this.dataSource.data = this.dataSource.data.filter((item) => {
            const date = new Date(item.Shipdate);
            console.log(date);
            return date >= fromDate &&
                date <= toDate;
        }).sort(function compare(a, b) {
            const dateA = new Date(a.Shipdate);
            const dateB = new Date(b.Shipdate);
            return dateA.valueOf() - dateB.valueOf();
        });
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
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](res);
            this.dataSource.paginator = this.paginator;
        });
        this.tableService.data$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(res => res.tableCount), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(res => this.tableCount = res)).subscribe();
    }
    // change cell color based on number of times the property count exists
    getClassByValue(a) {
        for (let j = 0; j < this.tableCount.length; j++) {
            for (const property in this.tableCount[j]) {
                if (property === a) {
                    return this.countCheck(this.tableCount[j][property].count);
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
                return ('default');
        }
    }
    ngOnInit() {
        this.loadData();
    }
};
DataTableComponent.ctorParameters = () => [
    { type: _services_table_service__WEBPACK_IMPORTED_MODULE_2__["TableService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: false })
], DataTableComponent.prototype, "paginator", void 0);
DataTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-data-table',
        template: __webpack_require__(/*! raw-loader!./data-table.component.html */ "./node_modules/raw-loader/index.js!./src/app/mat-data-table/data-table/data-table.component.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('detailExpand', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ height: '0px', minHeight: '0' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ height: '*' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ]),
        ],
        styles: [__webpack_require__(/*! ./data-table.component.css */ "./src/app/mat-data-table/data-table/data-table.component.css")]
    })
], DataTableComponent);



/***/ }),

/***/ "./src/app/mat-data-table/data-table/style-paginator.directive.ts":
/*!************************************************************************!*\
  !*** ./src/app/mat-data-table/data-table/style-paginator.directive.ts ***!
  \************************************************************************/
/*! exports provided: StylePaginatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StylePaginatorDirective", function() { return StylePaginatorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");



let StylePaginatorDirective = class StylePaginatorDirective {
    constructor(matPag, vr, ren) {
        this.matPag = matPag;
        this.vr = vr;
        this.ren = ren;
        this._pageGapTxt = '...';
        this._buttons = [];
        this._curPageObj = {
            length: 0,
            pageIndex: 0,
            pageSize: 0,
            previousPageIndex: 0
        };
        this._showTotalPages = 2;
        // to rerender buttons on items per page change and first, last, next and prior buttons
        this.matPag.page.subscribe((e) => {
            if (this._curPageObj.pageSize != e.pageSize &&
                this._curPageObj.pageIndex != 0) {
                e.pageIndex = 0;
                this._rangeStart = 0;
                this._rangeEnd = this._showTotalPages - 1;
            }
            this._curPageObj = e;
            this.initPageRange();
        });
    }
    get showTotalPages() {
        return this._showTotalPages;
    }
    set showTotalPages(value) {
        this._showTotalPages = value % 2 == 0 ? value + 1 : value;
    }
    get inc() {
        return this._showTotalPages % 2 == 0
            ? this.showTotalPages / 2
            : (this.showTotalPages - 1) / 2;
    }
    get numOfPages() {
        return this.matPag.getNumberOfPages();
    }
    get lastPageIndex() {
        return this.matPag.getNumberOfPages() - 1;
    }
    buildPageNumbers() {
        const actionContainer = this.vr.element.nativeElement.querySelector('div.mat-paginator-range-actions');
        const nextPageNode = this.vr.element.nativeElement.querySelector('button.mat-paginator-navigation-next');
        const prevButtonCount = this._buttons.length;
        // remove buttons before creating new ones
        if (this._buttons.length > 0) {
            this._buttons.forEach(button => {
                this.ren.removeChild(actionContainer, button);
            });
            // Empty state array
            this._buttons.length = 0;
        }
        // initialize next page and last page buttons
        if (this._buttons.length == 0) {
            const nodeArray = this.vr.element.nativeElement.childNodes[0].childNodes[0]
                .childNodes[2].childNodes;
            setTimeout(() => {
                for (let i = 0; i < nodeArray.length; i++) {
                    if (nodeArray[i].nodeName === 'BUTTON') {
                        if (nodeArray[i].innerHTML.length > 100 && nodeArray[i].disabled) {
                            this.ren.setStyle(nodeArray[i], 'background-color', '#0257FF');
                            this.ren.setStyle(nodeArray[i], 'color', 'white');
                            this.ren.setStyle(nodeArray[i], 'margin', '.5%');
                        }
                        else if (nodeArray[i].innerHTML.length > 100 &&
                            !nodeArray[i].disabled) {
                            this.ren.setStyle(nodeArray[i], 'background-color', '#0257FF');
                            this.ren.setStyle(nodeArray[i], 'color', 'white');
                            this.ren.setStyle(nodeArray[i], 'margin', '.5%');
                        }
                        else if (nodeArray[i].disabled) {
                            this.ren.setStyle(nodeArray[i], 'background-color', 'lightgray');
                        }
                    }
                }
            });
        }
        for (let i = 0; i < this.numOfPages; i++) {
            if (i >= this._rangeStart && i <= this._rangeEnd) {
                this.ren.insertBefore(actionContainer, this.createButton(i, this.matPag.pageIndex), nextPageNode);
            }
            if (i == this._rangeEnd) {
                this.ren.insertBefore(actionContainer, this.createButton(this._pageGapTxt, this._rangeEnd), nextPageNode);
            }
        }
    }
    createButton(i, pageIndex) {
        const linkBtn = this.ren.createElement('button');
        this.ren.addClass(linkBtn, 'mat-mini-fab');
        this.ren.setStyle(linkBtn, 'margin', '1%');
        this.ren.setStyle(linkBtn, 'background-color', 'white');
        const pagingTxt = isNaN(i) ? this._pageGapTxt : +(i + 1);
        const text = this.ren.createText(pagingTxt + '');
        this.ren.addClass(linkBtn, 'mat-custom-page');
        switch (i) {
            case pageIndex:
                this.ren.setAttribute(linkBtn, 'disabled', 'disabled');
                break;
            case this._pageGapTxt:
                let newIndex = this._curPageObj.pageIndex + this._showTotalPages;
                if (newIndex >= this.numOfPages) {
                    newIndex = this.lastPageIndex;
                }
                if (pageIndex != this.lastPageIndex) {
                    this.ren.listen(linkBtn, 'click', () => {
                        console.log('working: ', pageIndex);
                        this.switchPage(newIndex);
                    });
                }
                if (pageIndex == this.lastPageIndex) {
                    this.ren.setAttribute(linkBtn, 'disabled', 'disabled');
                }
                break;
            default:
                this.ren.listen(linkBtn, 'click', () => {
                    this.switchPage(i);
                });
                break;
        }
        this.ren.appendChild(linkBtn, text);
        // Add button to private array for state
        this._buttons.push(linkBtn);
        return linkBtn;
    }
    // calculates the button range based on class input parameters and based on current page index value. Used to render new buttons after event.
    initPageRange() {
        const middleIndex = (this._rangeStart + this._rangeEnd) / 2;
        this._rangeStart = this.calcRangeStart(middleIndex);
        this._rangeEnd = this.calcRangeEnd(middleIndex);
        this.buildPageNumbers();
    }
    // Helper function To calculate start of button range
    calcRangeStart(middleIndex) {
        switch (true) {
            case this._curPageObj.pageIndex == 0 && this._rangeStart != 0:
                return 0;
            case this._curPageObj.pageIndex > this._rangeEnd:
                return this._curPageObj.pageIndex + this.inc > this.lastPageIndex
                    ? this.lastPageIndex - this.inc * 2
                    : this._curPageObj.pageIndex - this.inc;
            case this._curPageObj.pageIndex > this._curPageObj.previousPageIndex &&
                this._curPageObj.pageIndex > middleIndex &&
                this._rangeEnd < this.lastPageIndex:
                return this._rangeStart + 1;
            case this._curPageObj.pageIndex < this._curPageObj.previousPageIndex &&
                this._curPageObj.pageIndex < middleIndex &&
                this._rangeStart > 0:
                return this._rangeStart - 1;
            default:
                return this._rangeStart;
        }
    }
    // Helpter function to calculate end of button range
    calcRangeEnd(middleIndex) {
        switch (true) {
            case this._curPageObj.pageIndex == 0 &&
                this._rangeEnd != this._showTotalPages:
                return this._showTotalPages - 1;
            case this._curPageObj.pageIndex > this._rangeEnd:
                return this._curPageObj.pageIndex + this.inc > this.lastPageIndex
                    ? this.lastPageIndex
                    : this._curPageObj.pageIndex + 1;
            case this._curPageObj.pageIndex > this._curPageObj.previousPageIndex &&
                this._curPageObj.pageIndex > middleIndex &&
                this._rangeEnd < this.lastPageIndex:
                return this._rangeEnd + 1;
            case this._curPageObj.pageIndex < this._curPageObj.previousPageIndex &&
                this._curPageObj.pageIndex < middleIndex &&
                this._rangeStart >= 0 &&
                this._rangeEnd > this._showTotalPages - 1:
                return this._rangeEnd - 1;
            default:
                return this._rangeEnd;
        }
    }
    // Helper function to switch page on non first, last, next and previous buttons only.
    switchPage(i) {
        console.log('switch', i);
        const previousPageIndex = this.matPag.pageIndex;
        this.matPag.pageIndex = i;
        // this.matPag._emitPageEvent(previousPageIndex);
        this.initPageRange();
    }
    // Initialize default state after view init
    ngAfterViewInit() {
        this._rangeStart = 0;
        this._rangeEnd = this._showTotalPages - 1;
        this.initPageRange();
    }
};
StylePaginatorDirective.ctorParameters = () => [
    { type: _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], StylePaginatorDirective.prototype, "showTotalPages", null);
StylePaginatorDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[style-paginator]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])())
], StylePaginatorDirective);



/***/ }),

/***/ "./src/app/mat-data-table/mat-data-table.component.css":
/*!*************************************************************!*\
  !*** ./src/app/mat-data-table/mat-data-table.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".action-bar {\n  background: white;\n  padding: 16px 8px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  text-align: right;\n}\n.action-bar:empty {\n  display: none;\n}\n.mat-table {\n  width: 100%;\n  border-radius: 20px;\n}\n.mat-table thead {\n  background-color: #f9f9f9;\n}\n.mat-table thead tr th.mat-header-cell {\n  color: #616161;\n  font-size: 12px;\n  border-bottom-color: rgba(0, 0, 0, 0.12);\n}\n.mat-table tbody tr td.mat-cell {\n  font-size: 12px;\n  border-bottom-color: rgba(0, 0, 0, 0.12);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0LWRhdGEtdGFibGUvbWF0LWRhdGEtdGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsNENBQTRDO0VBQzVDLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysd0NBQXdDO0FBQzFDO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysd0NBQXdDO0FBQzFDIiwiZmlsZSI6InNyYy9hcHAvbWF0LWRhdGEtdGFibGUvbWF0LWRhdGEtdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3Rpb24tYmFyIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDE2cHggOHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uYWN0aW9uLWJhcjplbXB0eSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5tYXQtdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cbi5tYXQtdGFibGUgdGhlYWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xufVxuLm1hdC10YWJsZSB0aGVhZCB0ciB0aC5tYXQtaGVhZGVyLWNlbGwge1xuICBjb2xvcjogIzYxNjE2MTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuLm1hdC10YWJsZSB0Ym9keSB0ciB0ZC5tYXQtY2VsbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/mat-data-table/mat-data-table.component.ts":
/*!************************************************************!*\
  !*** ./src/app/mat-data-table/mat-data-table.component.ts ***!
  \************************************************************/
/*! exports provided: MatDataTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDataTableComponent", function() { return MatDataTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MatDataTableComponent = class MatDataTableComponent {
    constructor() { }
    ngOnInit() {
    }
};
MatDataTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'mat-data-table',
        template: __webpack_require__(/*! raw-loader!./mat-data-table.component.html */ "./node_modules/raw-loader/index.js!./src/app/mat-data-table/mat-data-table.component.html"),
        styles: [__webpack_require__(/*! ./mat-data-table.component.css */ "./src/app/mat-data-table/mat-data-table.component.css")]
    })
], MatDataTableComponent);



/***/ }),

/***/ "./src/app/services/table.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/table.service.ts ***!
  \*******************************************/
/*! exports provided: TableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableService", function() { return TableService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let TableService = class TableService {
    constructor(http) {
        this.http = http;
        this.tablesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.loadingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.loading$ = this.loadingSubject.asObservable();
        this.data$ = this.tablesSubject.asObservable();
        this.jobUrl = 'http://localhost:5002';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    // getJob(): Observable<any> {
    //   const url = `${this.jobUrl}/get-all-table-data`;
    //   return this.http.get<Job>(url).pipe(
    //     map((res: any) => res.data),
    //     shareReplay(),
    //     tap(res => console.log(res)),
    //   );
    // }
    getJobData() {
        // const url = `${this.jobUrl}/api/get-all-table-data`;
        const url = `/api/get-all-table-data`;
        this.loadingSubject.next(true);
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(res => this.tablesSubject.next(res)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res['data']), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => this.loadingSubject.next(false)));
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
    addJobData(element) {
        console.log(element);
        // const url = `${this.jobUrl}/api/submit-data`;
        const url = `/api/submit-data`;
        return this.http.post(url, element).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(res => console.log(res)));
    }
    findLessons(filter = '', sortOrder = 'asc', pageNumber = 0, pageSize = 3) {
        const url = `${this.jobUrl}/api/get-all-table-data`;
        return this.http.get(url, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
                .set('filter', filter)
                .set('sortOrder', sortOrder)
                .set('pageNumber', pageNumber.toString())
                .set('pageSize', pageSize.toString())
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res['data']), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(res => console.log(res)));
    }
};
TableService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
TableService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TableService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ejiroogagarue/Documents/project/Data-Table/Data-Table-front-end/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map