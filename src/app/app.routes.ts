import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { AuthComponent } from './auth/auth.component';
import path from 'path';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:'auth', component:AuthComponent},
    {path:'signup', component:SignupComponent},
    {path:'home',component:HomeComponent}
];
