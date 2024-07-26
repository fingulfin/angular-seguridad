import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable,tap} from 'rxjs'
@Injectable({
 
  providedIn: 'root',


})
export class AuthService {
private request:any
private token=''
  constructor(private http:HttpClient) { }

  login(){
    
    this.http.post<any>('http://localhost:8080/rest/auth/login',{
      email:'yo@gmail.com',
      password:'123456'
    }).subscribe(request=>{
      this.request=request
      this.token=request.token;
      console.log("hayyy yaaaaa:"+this.request.token)
    })
  
 
  }
//Reseteamos el token para salir jijijiji
  logout() {
    this.token = '';
    }

    get isLoggedIn() { return this.token !== ''; }   

}
