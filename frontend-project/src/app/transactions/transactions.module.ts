import { NgModule } from '@angular/core';
import { TransactionsListComponent } from './transactions-list/transactions-list.component';
import { CommonModule } from '@angular/common';
import { TransactionsRoutingModule } from './transactions-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatTableExporterModule } from 'mat-table-exporter';

const materialImports = [
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatButtonModule,
  MatSnackBarModule,
  MatTableExporterModule,
];

@NgModule({
  declarations: [TransactionsListComponent],
  imports: [
    CommonModule,
    TransactionsRoutingModule,
    FontAwesomeModule,
    ...materialImports,
  ],
  exports: [TransactionsRoutingModule],
})
export class TransactionsModule {}
