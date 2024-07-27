import { Component } from '@angular/core';
import {AuthService} from '../auth.service'
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { stringify } from 'querystring';

@Component({
  selector: 'app-lista-libros',
  standalone: true,
  imports: [],
  templateUrl: './lista-libros.component.html',
  styleUrl: './lista-libros.component.css'
})
export class ListaLibrosComponent {
constructor(private http:HttpClient){

  }

  getLibros(){

    let token=localStorage.getItem('token')
    const headers = { 'Authorization': 'Bearer '+token }
console.log('El token es '+token);
    this.http.get<any[]>('http://localhost:8080/rest/libro/libros',{headers}  )
    .subscribe(request=>{
    
      console.log("hayyy yaaaaa:"+request[0].nombre)
//Guardamos el token
//localStorage.setItem('token',this.token)

//localStorage.getItem('token')

    })

   }
}
