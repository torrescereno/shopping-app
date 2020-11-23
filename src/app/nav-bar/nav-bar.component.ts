import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  estaAutenticado: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.user$.subscribe((user) => {

      this.estaAutenticado = !!user;
    });
  }

  salir(): void{
    this.authService.logOut();
    this.estaAutenticado = false;
  }

}
