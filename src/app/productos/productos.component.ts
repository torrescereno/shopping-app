import { Component, OnInit } from '@angular/core';
import { Producto, ProductosService } from '../productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  productos = [];

  constructor(private productoSerice: ProductosService) { }

  ngOnInit(): void {
    this.productoSerice.getProducto().subscribe(data => {
      this.productos = data;
    });
  }

}