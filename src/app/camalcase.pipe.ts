import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camalcase'
})
export class CamalcasePipe implements PipeTransform {

  transform(newdata: any[], field: string, reverse: boolean = false): any[] {
    if (!newdata) return [];

    if (field) newdata.sort((a, b) => a[field] > b[field] ? 1 : -1);
    else newdata.sort((a, b) => a > b ? 1 : -1);

    if (reverse) newdata.reverse();

    return newdata;
  }

}
