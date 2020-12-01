import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

export interface Producto{
  nombre: string;
  categoria: string;
  cantidad: number;
  descripcion: string;
  imagen: string;
  precio: number;
}

@Injectable({
  providedIn: 'root'
})

export class ProductosService {

  url = 'https://shopping-app-d41b8.firebaseio.com/productos.json';

  constructor(private http: HttpClient, private authService: AuthService ) { }

  /* guardarProductos():Observable<any>{
    return this.http.put('https://shopping-app-d41b8.firebaseio.com/productos.json', this.productos);
  } */


  listarProductos(): Observable<any> {
    return this.http.get(this.url);
  };

  getProducto(): Observable<any>{
    return this.http.get(this.url,{
        params: new HttpParams().set('auth', this.authService.idToken)
      }
    );
  }

}
