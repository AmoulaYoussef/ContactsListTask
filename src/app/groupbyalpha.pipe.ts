import { Pipe, PipeTransform } from '@angular/core';
import { extractDeepPropertyByMapKey, isFunction } from '../app/helper';

@Pipe({
  name: 'groupbyalpha'
})
export class GroupbyalphaPipe implements PipeTransform {

  // items=[{
  //   firstName:'Amel'
  // },
  // {
  //   firstName:'amal'
  // },
  // {
  //   firstName:'Amoula'
  // },
  // {
  //   firstName:'zmoula'
  // },
  // {
  //   firstName:'bmoula'
  // },
  // {
  //   firstName:'Bmoula'
  // },
  // {
  //   firstName:'Dmoula'
  // }]

  transform(items: any[], filter: string): Array<any> {
    debugger;
  //   if (filter && Array.isArray(items)) {
  //     let filterKeys = Object.keys(filter);
  //     return items.filter(item =>
  //         filterKeys.reduce((memo, keyName) =>
  //             (memo && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] === "", true));
  // } else {
  //     return items;}
  
    console.log(items[1].firstName)
    console.log(filter)
   // debugger;
    
    if (items && filter) {  
      return items.filter((el) => el.firstName.toUpperCase().startsWith(filter.toUpperCase()));   
    }
    else{
      return items;
    }
  }
}

