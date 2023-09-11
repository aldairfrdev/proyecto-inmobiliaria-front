import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'euros'
})
export class EurosPipe implements PipeTransform {

  transform(value: number): string {
    let decimales:string="";
    let parteEntera:string="";
    let euros:string="";
    let digitos:string = value.toString();//EL NÚMERO QUE NO HAYA LLEGADO LO TENEMOS EN FORMATO STRING CON LO QUE PODREMOS UTILIZAR LOS MÉTODOS DE LA CLASE STRING

    //EXTRAEMOS LOS DECIMALES QUE AÑADIREMOS AL FINAL
    decimales = this.extraeDecimales(digitos);
    decimales = decimales.replace(".",",");

    //EXTRAEMOS LA PARTE ENTERA
    parteEntera = this.extraeParteEntera(digitos);

    //REVERTIMOS LA PARTE ENTERA PARA PONERLE LOS PUNTOS
    //DESDE LA IZQUIERDA

    parteEntera = this.reverseString(parteEntera);


    //PONEMOS LOS PUNTITOS A LA PARTE ENTERA
    parteEntera = this.ponePuntitosParteEntera(parteEntera);

    //VOLVEMOS A REVERTIR LA PARTE ENTERA
    parteEntera = this.reverseString(parteEntera);




    return parteEntera + decimales + "€";
  }

  //"34567"   numeroConPuntitos:345.67   contador: 3
  ponePuntitosParteEntera(s:string):string{

    let numeroConPuntitos="";
    let contador=0;

    for(let digito of s){

      numeroConPuntitos = numeroConPuntitos + digito;
      contador ++;

      if(contador%3==0 && s.length != contador){

        numeroConPuntitos = numeroConPuntitos + ".";

      }

    }

    return numeroConPuntitos;

  }


  reverseString(s:string):string{

    //"5671"  ====> EL SPLIT LO CONVIERTE EN ===> [5,6,7,1]
    //EL MÉTODO SPLIT ME DEVUELVE UN ARRAY
    //EL CRITERIO DEL NUEVO ELEMENTO DEL ARRAY
    //ES QUE ESTE SEPARADO POR UN ESPACIO VACIO
    return s.split("").reverse().join("");//1765
  }



  extraeParteEntera(s:string):string{

    let cadenaEntera="";

    for(let digito of s){

      if(digito=="." || digito==","){
        break;
      }

      cadenaEntera=cadenaEntera+digito;

    }

    return cadenaEntera;
  }


  extraeDecimales(s:string):string{

    let decimales:string;
    let contador:number=0;
    let posicionDeLaComa:number=0;

    //HALLAMOS LA POSICIÓN DE LA COMA RECORRIENDO EL STRING
    for(let digito of s){
      contador ++;
      if(digito=="." || digito==","){ posicionDeLaComa = contador; break;}
    }

    //SI NO HAY DECIMALES...POSICION SEGUIRÁ VALIENDO 0
    if(posicionDeLaComa == 0){
      decimales = "";

    }else{
      decimales = s.substring(posicionDeLaComa-1);
    }

    return decimales;


  }


}
