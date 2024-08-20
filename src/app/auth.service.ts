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

  login(username:string, password:string){

    console.log('Este es el email'+username)
    console.log('Este es el pssword '+password)
   
    this.http.post<any>('http://localhost:8080/rest/auth/login',{
      email:username,
      password:password
    }).subscribe(request=>{
      this.request=request
      this.token=request.token;
      console.log("hayyy yaaaaa:"+this.request.token)
//Guardamos el token
localStorage.setItem('token',this.token)

//localStorage.getItem('token')

    })
  
 
  }
//Reseteamos el token para salir jijijiji
  logout() {
    this.token = '';
    localStorage.removeItem('token')

    }

    get isLoggedIn() { return this.token !== ''; }   

}
