import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre="Fernando";
  nombre2="ferNAnDo ruIz pEREZ";
  array=[1,2,3,4,5,6,7,8,9,10];
  a=0.234;
  PI=Math.PI;
  salario=1234.5;
  fecha=new Date();
  activar:boolean=true;
  video="https://www.youtube.com/embed/nO1ROKMjPqI";
  valorDePromesa=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("llego la data"),3500)})
  heroe={
    nombre:"Logan",
    clave:"Wolverine",
    edad:500,
    direccion:{
      calle:"Primera",
      casa:"19"
    }
  }



}
