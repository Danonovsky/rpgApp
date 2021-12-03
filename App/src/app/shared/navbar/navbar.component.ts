import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ProfileService } from 'src/app/profile/profile.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private profile: ProfileService,
    private jwtHelper: JwtHelperService
  ) { }

  ngOnInit(): void {
  }

  isLoggedIn() {
    var token = localStorage.getItem("jwt");
    if(token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }
    this.profile.logOut();
    return false;
  }

  logout() {
    this.profile.logOut();
  }

}
