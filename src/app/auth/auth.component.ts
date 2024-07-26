import { Component } from '@angular/core';
import {AuthService} from '../auth.service'

import {HttpClient, HttpClientModule} from '@angular/common/http'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule,  HttpClientModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
constructor(public authService:AuthService){
console.log("contuctor de autservice component")
}
}
