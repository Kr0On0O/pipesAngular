import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string,visible:boolean): string {

    if(visible==true){
      let texto:string="";
      for(let x;x<value.length;x++){
        texto+="*";
        console.log(texto);
      }
      return texto;
    }

    if(visible==false)
    return value;
  }

}
