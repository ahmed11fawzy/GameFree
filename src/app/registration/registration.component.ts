import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  constructor(private _AuthService:AuthService,private _Router:Router){}
  loader:boolean=false;
  apiError:string='';
  apiMsg:string='';
  registrationForm:FormGroup= new FormGroup({
    name:new FormControl(null,[Validators.required,Validators.pattern(/^([a-zA-Z]{3,}?)/)]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-zA-Z]).{8,25}$/)]),
    rePassword:new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-zA-Z]).{8,25}$/)]),/* (?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" */
    phone:new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
  },{validators:this.rePasswordMatch})

  rePasswordMatch( registrationForm:any){
      let passwordControl=registrationForm.get('password')
      let rePasswordControl=registrationForm.get('rePassword')
      if(passwordControl.value===rePasswordControl.value){
        return null;
      }
      else{
        rePasswordControl.setErrors({passwordMatch:"password and rePassword doesn't match "})
        return {passwordMatch:"password and rePassword doesn't match "};
      }
  }

  handelRegister(registerForm:FormGroup){
    this.loader=true;
    if(registerForm.valid){
      this._AuthService.signUp(registerForm.value).subscribe({
        next:(response)=>{
          if(response.message ==='success'){
            this._Router.navigate(['/login'])
            this.loader=false;
          }
        },
        error:(err)=>{
          this.loader=false;;
          this.apiError=err.error.message;
          this.apiMsg=err?.error?.errors?.msg;


        }
      })
    }
  }

}
