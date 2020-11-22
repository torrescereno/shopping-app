import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap} from 'rxjs/operators';


interface AuthReponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

interface AuthLoginResponseData extends AuthReponseData {
  registered: boolean;
}

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class AuthService {

  private readonly API_KEY = 'AIzaSyCQILq8PvZjVRqTtZ8Ly2303G7FwpqD_Hk';
  urlBase = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword';
  idToken: string;

  constructor(private http: HttpClient, private router: Router) { }

 login(email: string, password: string): Observable<AuthReponseData> {
  return this.http.post<AuthLoginResponseData>(
    `${this.urlBase}`, {
    email,
    password,
    returnSecureToken: true,
  },
    {
      params: new HttpParams().set('key', this.API_KEY)
    }
  ).pipe(tap(resp => this.idToken = resp.idToken));
 }
}
