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

  userName: string = '';
  userId: string = '';
  token: string = '';

  ngOnInit(): void {
    const t = localStorage.getItem("jwt");
    if(t) {
      this.token = t;
      this.userName = this.jwtHelper.decodeToken(this.token)["name"];
      this.userId = this.jwtHelper.decodeToken(this.token)["id"];
    }
  }

  isLoggedIn() {
    var token = localStorage.getItem("jwt");
    if(token && !this.jwtHelper.isTokenExpired(token)) {
      this.userName = this.jwtHelper.decodeToken(token)["name"];
      this.userId = this.jwtHelper.decodeToken(token)["id"];
      return true;
    }
    this.profile.logOut();
    return false;
  }

  logout() {
    this.profile.logOut();
  }

}
