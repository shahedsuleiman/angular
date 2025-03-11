import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { authDTO } from '../../Models/Auth/authenticationDTO';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) {
  }


  userLogin(username:string, password:string): Observable<authDTO> {
    return this._http.post<authDTO>('https://dummyjson.com/auth/login', {username,password})
    .pipe(map(response => {
      return response;
    }));
  }

}
