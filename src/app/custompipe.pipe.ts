import { HtmlTagDefinition } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe',
})
export class CustompipePipe implements PipeTransform {
  transform(title: string,numberofchar:number):string {
    //console.log(title)
    if (title.length > numberofchar) {
      return title.substr(0, numberofchar) + '....';
    }
    return title;
  }
}
