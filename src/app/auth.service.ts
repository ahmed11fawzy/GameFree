import { HttpClient } from '@angular/common/http';
import { Observable ,BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData=new BehaviorSubject(null);
  constructor(private _HttpClient:HttpClient,private _Router:Router) {

    if(localStorage.getItem('userToken')!==null){
      this.decodedToken();
    }
   }

  decodedToken(){
    let decodedToken=JSON.stringify(localStorage.getItem('userToken'));
    let inCodedToken:any= jwtDecode(decodedToken);
    this.userData.next(inCodedToken);

  }

  signUp(data:object):Observable<any>
  {
    return this._HttpClient.post('https://route-ecommerce.onrender.com/api/v1/auth/signup',data);

  }
  signIn(data:object):Observable<any>
  {
    return this._HttpClient.post('https://route-ecommerce.onrender.com/api/v1/auth/signin',data);

  }
  logOut(){
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this._Router.navigate(['/login'])
  }

}
