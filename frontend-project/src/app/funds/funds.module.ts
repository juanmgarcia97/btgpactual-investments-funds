import { NgModule } from "@angular/core";
import { MatTableModule } from '@angular/material/table';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FundsComponent } from './funds-list/funds.component';
import { CommonModule } from "@angular/common";
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from "@angular/material/form-field";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const materialImports = [
  MatFormFieldModule,
  MatTableModule,
  MatSnackBarModule
];

@NgModule({
  declarations: [FundsComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    ...materialImports,
  ],
  exports: [],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'fill' },
    },
  ],
})
export class FundsModule { }