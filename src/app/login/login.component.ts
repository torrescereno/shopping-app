import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Observer } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  @ViewChild('form') formulario: NgForm;

  isLoading: boolean;
  error: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {

    this.isLoading = true;
    this.error = null;

    const observer: Observer<any> = {
      next: (resp) => this.handleResponse(resp),
      error: (error) => this.handleError(error),
      complete: () => this.isLoading = false,

    }

    /* Login */
    this.authService.login(this.formulario.value.email, this.formulario.value.password).subscribe(
      observer
    );
  }

  handleResponse(resp){
    this.formulario.value.email = '';
    this.formulario.value.password = '';
    this.isLoading = false;
    this.router.navigate(['home']);
  }

  handleError(error){
    this.error = error;
    this.isLoading = false;
  }


}
