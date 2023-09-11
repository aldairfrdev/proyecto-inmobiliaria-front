import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'amueblado'
})
export class AmuebladoPipe implements PipeTransform {

  transform(value:number): string {
    if(value==1){
      return "Amueblado";
    }else{
      return "No amueblado";
    }
    
  }

}
