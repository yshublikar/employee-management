import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], searchText: string, keys): any {
    if(!value) return null;
    if(!searchText) return value;
    searchText = searchText.toLowerCase();

    return value.filter((item)=> {
        return keys.some(x=> JSON.stringify(this.getValue(item, x)).toLowerCase().includes(searchText))
    });
  }

  getValue(object, key) {
    return key
      .split('.')
      .reduce((o, k) => (typeof o === 'string' ? JSON.parse(o) : o)[k], object);
  }

}
