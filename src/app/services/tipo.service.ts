import { Injectable } from '@angular/core';
import { GLOBAL } from './global';
import { HttpClient } from '@angular/common/http';
import { Tipo } from '../models/entity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoService {

  url:string=GLOBAL.url;

  constructor(
    private _http:HttpClient
  ) { }

  getTipos():Observable<Tipo[]>{

    return this._http.get<Tipo[]>(this.url + "tipos");

  }

  getTipo(id:number):Observable<Tipo>{
    
    return this._http.get<Tipo>(this.url + "tipo/" + id);
  }


  addTipo(tipo:Tipo):Observable<Tipo>{

    return this._http.post<Tipo>(this.url + "tipo",tipo);

  }


  updateTipo(tipo:Tipo):Observable<Tipo>{

    return this._http.put<Tipo>(this.url + "tipo",tipo);

  }


}
