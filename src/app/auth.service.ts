import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from './models/user.model';


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
  idToken: string;

  user$ = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient, private router: Router) { }


  login(email: string, password: string): Observable<AuthReponseData> {

    const urlLogin = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword';

    return this.http.post<AuthLoginResponseData>(
      `${urlLogin}`, {
      email,
      password,
      returnSecureToken: true,
    },
      {
        params: new HttpParams().set('key', this.API_KEY)
      }
    ).pipe(
      catchError(this.controladorError),
      tap((resp) => this.controlarUserario(resp)));
  }

  registro(email: string, password: string): Observable<AuthReponseData> {

    const urlRegistro = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp';

    return this.http.post<AuthLoginResponseData>(
      `${urlRegistro}`, {
      email,
      password,
    },
      {
        params: new HttpParams().set('key', this.API_KEY)
      }
    ).pipe(
      catchError(this.controladorError),
      tap((resp) => this.controlarUserario(resp)));
  }

  getUser(idToken: string): Observable<AuthReponseData> {

    const urlObt = 'https://identitytoolkit.googleapis.com/v1/accounts:lookup';

    return this.http.post<any>(
      `${urlObt}`,
      {
        idToken,
      },
      {
        params: new HttpParams().set('key', this.API_KEY)
      }
    );
  }

  controladorError(resp: any): Observable<any> {
    const error = resp.error.error.message;
    return throwError(resp);
  }

  controlarUserario(resp: AuthReponseData): void {

    this.idToken = resp.idToken;
    const expira = new Date(new Date().getTime() + Number(resp.expiresIn) * 1000);
    const user = new User(resp.email, resp.localId, resp.idToken, expira);

    localStorage.setItem('user', JSON.stringify(user));
    this.user$.next(user);
  }

  autoLogin(): void{
    const datosUser = JSON.parse(localStorage.getItem('user'));

    if (!datosUser) {
      return;
    } else {
      const usuarioCargado: User = new User(datosUser.email, datosUser.id, datosUser._token, datosUser._tokenExpirationDate);
      if (usuarioCargado.token) {
        this.idToken = usuarioCargado.token;
        this.user$.next(usuarioCargado);
      }
    }
  }

  logOut(): void {
    localStorage.removeItem('user');
    this.router.navigate(['home']);
    this.user$.next(null);
  }

}
