import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

/* interface User{

} */

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'https://identitytoolkit.googleapis.com/v1/accounts:lookup';

  constructor( private authService: AuthService, private http: HttpClient ) { }

/*   getUser(){
    return this.http.post<any>(this.url,
      this.authService.idToken,
      {
        params: new HttpParams().set('key', 'AIzaSyCQILq8PvZjVRqTtZ8Ly2303G7FwpqD_Hk')
      }
    );
  } */

}
