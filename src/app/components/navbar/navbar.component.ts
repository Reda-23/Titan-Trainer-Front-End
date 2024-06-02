import { Component } from '@angular/core';
import {Route, Router, RouterLink} from "@angular/router";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-navbar',
  standalone: true,
    imports: [
        RouterLink
    ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private loginService : LoginService , private router : Router) {
  }

  logout() {
      this.loginService.logout();
      this.router.navigateByUrl('/login');
  }
}
