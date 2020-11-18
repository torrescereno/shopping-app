import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

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

  constructor(private http: HttpClient ) { }

  /* guardarProductos():Observable<any>{
    return this.http.put('https://shopping-app-d41b8.firebaseio.com/productos.json', this.productos);
  } */

  getProducto():Observable<any>{
    return this.http.get(this.url);
  }

}
