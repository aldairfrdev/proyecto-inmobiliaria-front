import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activo'
})
export class ActivoPipe implements PipeTransform {

  transform(value:number): string {
    if(value==1){
      return "●";
    }else{
      return "●";
    }
    
  }

}
