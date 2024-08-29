import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import {AuthComponent} from '../app/auth/auth.component'
import {ListaLibrosComponent} from '../app/lista-libros/lista-libros.component'
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { SignupComponent } from "./signup/signup.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
     RouterOutlet, RouterLink, RouterLinkActive, AuthComponent, ListaLibrosComponent, HttpClientModule, SignupComponent],
 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-nuevo';
/*
  constructor(private http:HttpClient){
//this.http.get<any>('http://localhost:8080/resource/resource').subscribe(res=>{
 // console.log("Hola como estas "+res.content);
//})

this.http.post<any>('http://localhost:8080/rest/auth/login',{
  email:'yo@gmail.com',
  password:'123456'
}).subscribe(res=>{
  console.log("jajaja:"+res.token)
})
  }*/
}
