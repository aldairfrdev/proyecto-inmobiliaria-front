import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoblacionService } from 'src/app/services/poblacion.service';

@Component({
  selector: 'app-list-poblacion',
  templateUrl: './list-poblacion.component.html',
  styleUrls: ['./list-poblacion.component.css']
})
export class ListPoblacionComponent {


  aDatos:any[];

  constructor(
    private _poblacionService:PoblacionService,
    private _router:Router

  ){}

  ngOnInit(): void {
    this.getDatos();
  }

  getDatos():void{

    this._poblacionService.getPoblaciones().subscribe({

      next:(datos)=>{
        this.aDatos = datos;
      }
      ,
      error:(error)=>{this._router.navigate(['/error']);}
      ,
      complete:()=>{}

    });

  }
}
