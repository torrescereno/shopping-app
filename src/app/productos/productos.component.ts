import { Component, OnInit } from '@angular/core';
import { Producto, ProductosService } from '../productos.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  productos: Producto[];

  constructor(private productoSerice: ProductosService, private auhtService: AuthService) { }

  ngOnInit(): void {

    this.productoSerice.listarProductos().subscribe(data => {
      this.productos = data;
    });

    /* if (this.auhtService.idToken) {
      this.productoSerice.getProducto().subscribe(data => {
        this.productos = data;
      });
    }else{
      console.log('sesion cerrada');
    } */
  }

}
