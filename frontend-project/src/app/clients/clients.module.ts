import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatFormFieldModule,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
} from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ClientsAddComponent } from './add/clients-add.component';

const materialDeclarations = [
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatButtonModule,
  MatAutocompleteModule,
];

@NgModule({
  declarations: [ClientsAddComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    ...materialDeclarations,
  ],
  exports: [],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'fill' },
    },
  ],
})
export class ClientsModule {}
