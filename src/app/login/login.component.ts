import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _AuthService:AuthService,private _Router:Router){}
  loader:boolean=false;
  apiError:string='';
  apiMsg:string='';
  logInForm:FormGroup= new FormGroup({

    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-zA-Z]).{8,25}$/)]),

  })

  handelLogIn(logInForm:FormGroup){
    this.loader=true;
    if(logInForm.valid){
      this._AuthService.signIn(logInForm.value).subscribe({
        next:(response)=>{
          if(response.message ==='success'){
            localStorage.setItem('userToken',response.token);
            this._AuthService.decodedToken();
            this._Router.navigate(['/home'])
            this.loader=false;
          }
        },
        error:(err)=>{
          this.loader=false;;
          this.apiError=err.error.message;
          this.apiMsg=err.error.errors.msg;
          console.log(err.error)

        }
      })
    }
  }


}
