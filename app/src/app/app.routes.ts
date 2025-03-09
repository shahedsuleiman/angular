import { Routes } from '@angular/router';
import { AUTH_ROUTES } from './Modules/Auth/auth.routes';

export const routes: Routes = [
    { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
    { 
        path: 'auth', 
        children: AUTH_ROUTES 
      },
];
