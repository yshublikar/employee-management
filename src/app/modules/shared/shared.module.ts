import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsNumberPipe } from './pipes/is-number.pipe';
import { FilterPipe } from './pipes/filter.pipe';



@NgModule({
  declarations: [
    IsNumberPipe,
    FilterPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IsNumberPipe,
    FilterPipe
  ]
})
export class SharedModule { }
