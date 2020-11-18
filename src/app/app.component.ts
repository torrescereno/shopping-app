import { Component, OnInit } from '@angular/core';
import { Producto, ProductosService } from './productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'angular-coder-app';

  constructor(private productoSerice: ProductosService) { }

  ngOnInit(): void {
  }

  /* guardar(){
    this.productoSerice.guardarProductos().subscribe(data => {
      console.log('data: ', data);
    });
  }
 */

}


