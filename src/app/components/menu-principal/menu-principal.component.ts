import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit, OnDestroy{


  isLogged:boolean;
  suscripcion:Subscription;
  usuario:string;

  constructor(

    private _router:Router,
    private _authService:AuthService,
    private _communicationService:CommunicationService

  ){  }


  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  
  ngOnInit(): void {
    
    this.suscripcion = this._communicationService.logueo$.subscribe({

      next: (result) => {
        
        this.isLogged = result
      
        if(this.isLogged){
          this.usuario = this._authService.getUsuario()
        }
      }
      ,
      error: (error) => {this._router.navigate(["/error"])}
      ,
      complete: () => {}

    })
  }


  logout():void{

    this.isLogged = false;
    //localStorage.removeItem("token"); //Es una solución pero tenemos un servicio que lo hace (AuthService)
    this._authService.logout();
    this._router.navigate(["/home"])
  }

}
