import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceDiscount'
})
export class PriceDiscountPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args)
      return value - 1;
    else
      return value - args
  }

}
