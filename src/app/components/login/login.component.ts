import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Credentials } from 'src/app/models/entity';
import { AuthService } from 'src/app/services/auth.service';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy{

  token:string;
  logueo:boolean;
  suscripcion:Subscription;

  usuarioForm = new FormGroup({

      elEmail: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])
      
      ,
      
      elPassword: new FormControl('', [Validators.required])

  })

  creds:Credentials= {

    username:'', //en realidad es el email - TIENE QUE SER USERNAME
    password:'' //TIENE QUE SER PASSWORD
  }

  constructor(

    private _router:Router,
    private _authService:AuthService,
    private _communicationService:CommunicationService

  ){ }


  ngOnDestroy(): void {
    
    this.suscripcion.unsubscribe();
  }


  ngOnInit(): void {
    
    this.suscripcion = this._communicationService.logueo$.subscribe({

      next: (result) => {this.logueo = result}
      ,
      error: (error) => {this._router.navigate(["/error"])}
      ,
      complete: () => {}

    })
  }
  
  
  logIn():void {

    this._authService.login(this.creds).subscribe({

      next: (result) => {
        
        console.log(result);
        this._authService.loadTokenLocalStorage(result);
        this._communicationService.cambioLogueo(true);
      }
      ,
      error: (error) => {console.log(error)}
      ,
      complete: () => {this._router.navigate(["/home"])}

    })
  }


}
