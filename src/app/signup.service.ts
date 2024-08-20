import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SignupService {
private request:any
private mensaje:any


  constructor(private http:HttpClient) { }
  signup(username:string, password:string){

    console.log('Este es el email'+username)
    console.log('Este es el pssword '+password)
   
    this.http.post<any>('http://localhost:8080/signup/signup',{
      username:username,
      password:password
    }).subscribe(request=>{
      this.request=request
      this.mensaje=request.mensaje;
      console.log("hayyy yaaaaa:"+this.mensaje)
//Guardamos el token
//localStorage.setItem('token',this.mensaje.registrado)
//localStorage.getItem('token')

    })
  }

}
