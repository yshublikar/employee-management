import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsNumberPipe } from './pipes/is-number.pipe';



@NgModule({
  declarations: [
    IsNumberPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IsNumberPipe
  ]
})
export class SharedModule { }
