import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {


  //El objeto 'logueo' recibe como valor de inicialización el dato que nos manda AuthService
  logueo = new BehaviorSubject(this._authService.isLoggedIn());
  logueo$ = this.logueo.asObservable();

  constructor(

    private _authService : AuthService

  ) { }

  //Este método será llamado po el componente que desee enviar información (ej: login.component)
  //Este componente enviará el dato recogido en este método como argumento "estado"
  //Para terminar, el BehaviourSubject llamado 'logue' envía la información 'fresca' a 
  //todos los suscriptores 
  cambioLogueo(estado:boolean):void{
    this.logueo.next(estado);
  }
}
