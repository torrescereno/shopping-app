import { Injectable } from '@angular/core';

export interface Producto{
  id: number;
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

  productos: Producto[] = [
    {
      id: 1,
      nombre: 'Notebook HP 240 G7',
      categoria: 'Notebook',
      cantidad: 10,
      descripcion: 'Notebook HP 240 G7 Intel Celeron N4100 / 4GB Ram / 500GB HDD / Intel UHD 600 / 14" HD',
      imagen: '',
      precio: 2000,
    },
    {
      id: 2,
      nombre: 'Smartphone Redmi Note 9',
      categoria: 'Smartphones',
      cantidad: 5,
      descripcion: 'Smartphone Redmi Note 9 Verde 64 GB / Liberado',
      imagen: '',
      precio: 10000,
    },
    {
      id: 3,
      nombre: 'Pesas 15 kg',
      categoria: 'Deporte',
      cantidad: 2,
      descripcion: 'Set de Pesas 15 kg',
      imagen: '',
      precio: 10000,
    },
    {
      id: 4,
      nombre: 'Control DualShock 4 Jet Black',
      categoria: 'Videojuegos',
      cantidad: 5,
      descripcion: 'Nuevo DualShock',
      imagen: '',
      precio: 80000,
    }
  ];

  constructor() { }


  getProducto(id: number): Producto{
    return id ? this.productos[id] : null;
  }

}
