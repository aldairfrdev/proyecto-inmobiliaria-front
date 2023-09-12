import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Credentials } from '../models/entity';
import { Observable } from 'rxjs';
import { GLOBAL } from './global';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url:string = GLOBAL.url_base;

  constructor(

    private _http : HttpClient

  ) { }


  login (creds:Credentials):Observable<String>{
                                //URL                 //BODY 
    return this._http.post<any>(this.url+"authenticate", creds);

  }

  logout ():void {

    if(localStorage.getItem("token")){

      localStorage.removeItem("token");
    }

  }


  isLoggedIn():boolean {

    const helper = new JwtHelperService();
    const token = this.getToken();

    if(!token){ //primero comprobamos que token exista
      
      return false
    
    } else { //segundo, comprobamos que el token no sea cualquier cadena

      try{
        helper.decodeToken(token);
      } catch (e){
        //Si existe un error significa que el token no es jwt token, por lo tanto retornamos false
        return false;
      }
      
      //const expirationDate = helper.getTokenExpirationDate(token);
      const isExpired = helper.isTokenExpired(token);

      return !isExpired;
    }
  }

  
  getToken():string|null{

    return localStorage.getItem("token");

  }


  loadTokenLocalStorage(token:any) : void {

    if(localStorage.getItem("token")){

      localStorage.removeItem("token");
    }

    localStorage.setItem("token", token.jwt);


  }

}
