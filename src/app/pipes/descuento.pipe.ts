import { Pipe, PipeTransform } from '@angular/core';
import { Validators } from '@angular/forms';

/* Aplica desceunto para precios superiores a 8000 */

@Pipe({
  name: 'descuento'
})
export class DescuentoPipe implements PipeTransform {

  transform(precio: number): number {
    return precio > 8000 ? precio * 0.5 : precio;
  }

}
