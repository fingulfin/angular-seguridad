import { Component } from '@angular/core';
import {AuthService} from '../auth.service'
import { FormsModule } from '@angular/forms';

import {HttpClient, HttpClientModule} from '@angular/common/http'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule,  HttpClientModule, FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

  username:string=''
  password:string=''
constructor(public authService:AuthService){
console.log("contuctor de autservice component")
}
}
