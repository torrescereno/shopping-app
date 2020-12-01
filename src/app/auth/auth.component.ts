import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Observer } from 'rxjs';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent implements OnInit {

  @ViewChild('form') formulario: NgForm;

  isLoading: boolean;
  error: string;
  login = true;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {

    this.isLoading = true;
    this.error = null;

    const observer: Observer<any> = {
      next: (resp) => this.handleResponse(resp),
      error: (error) => this.handleError(error),
      complete: () => this.isLoading = false,

    };

    if (this.login) {
      /* Login */
      this.authService.login(this.formulario.value.email, this.formulario.value.password).subscribe(
        observer
      );
    }else{
      /* Registro */
      this.authService.registro(this.formulario.value.email, this.formulario.value.password).subscribe(
        observer
      );
    }
  }

  handleResponse(resp): void{
    this.formulario.value.email = '';
    this.formulario.value.password = '';
    this.isLoading = false;
    this.router.navigate(['home']);
  }

  handleError(error): void{
    this.error = error;
    this.isLoading = false;
  }

  formRegistro(): void{
    this.login = false;
  }

  formLogin(): void{
    this.login = true;
  }

}
