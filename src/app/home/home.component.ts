import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Observer } from 'rxjs';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // console.log("home oninit");
  }

  obtUser(): void{

    const observer: Observer<any> = {
      next: (resp) => console.log(resp),
      error: (error) => console.log(error),
      complete: () => console.log('OK'),
    };

    this.authService.getUser(this.authService.idToken).subscribe(
      observer
    );
  }

}
