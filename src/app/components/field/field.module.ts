import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FieldComponent } from './field.component';

@NgModule({
  imports: [
    // common
    CommonModule,
  ],
  declarations: [FieldComponent],
  exports: [FieldComponent],
})
export class FieldModule
{
}