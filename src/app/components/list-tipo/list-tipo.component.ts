import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoService } from 'src/app/services/tipo.service';

@Component({
  selector: 'app-list-tipo',
  templateUrl: './list-tipo.component.html',
  styleUrls: ['./list-tipo.component.css']
})
export class ListTipoComponent implements OnInit {

  aDatos:any[];

  constructor(
    private _tipoService:TipoService,
    private _router:Router

  ){}

  ngOnInit(): void {
    this.getDatos();
  }

  getDatos():void{

    this._tipoService.getTipos().subscribe({

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
