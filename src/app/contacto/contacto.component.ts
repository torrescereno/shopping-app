import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {


  formContacto: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    // Tradicional
    /* this.formContacto = new FormGroup({
      nombre: new FormControl('', [Validators.required])
    }); */

    // FormBuilder
    this.formContacto = this.fb.group({
      nombre: [null, [Validators.required]],
      apellido: [null, [Validators.required]],
      mail: [null, [Validators.required]],
      mensaje: [null, []]
    });

  }

  enviar(): void {
    console.log(this.formContacto);
  };

  // Metodos de la clase

  // Validaciones del formulario

  // Validaciones asincronicas

  emailUtilizado(control: FormControl): Promise<{ [s: string]: boolean }> | Observable< { [s: string]: boolean }> {

    const emailUtiliados: string[] = [
      'luis@luis.com'
    ];

    // Promesa
    /* const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        const emailUsado: string = emailUtiliados.find(email => email === control.value)
        if (emailUsado) {
          resolve({ emailUsado: true })
        } else {
          return null;
        }
      }, 3000);
    });

    return promise; */

    // Observable

    const obs$ = of(control.value).pipe(
      map((val) => {
        const emailUsado: string = emailUtiliados.find(email => email === control.value);
        return emailUtiliados ? { emailUsado: true } : null;
      }),
      delay(3000)
    );

    return obs$;
  }

  // Validaciones sincronicas
  nombreUtilizado(control: FormControl): { [s: string]: boolean } {

    if (control.value === 'Luis') {
      return {
        nombreUtilizado: true,
      };
    }else{
      return null;
    }

  }

7
}
