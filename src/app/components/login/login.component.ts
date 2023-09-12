import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Credentials } from 'src/app/models/entity';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  token:string;

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
    private _authService:AuthService

  ){ }
  
  
  logIn():void {

    this._authService.login(this.creds).subscribe({

      next: (result) => {
        
        console.log(result);
        this._authService.loadTokenLocalStorage(result);
      }
      ,
      error: (error) => {console.log(error)}
      ,
      complete: () => {this._router.navigate(["/home"])}

    })
  }


}
