import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isNumber'
})
export class IsNumberPipe implements PipeTransform {

  transform(value: any): any {
    return isNaN(value)? 'NA' : value;
  }

}
