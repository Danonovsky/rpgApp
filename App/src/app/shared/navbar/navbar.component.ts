import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/profile/profile.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private profile: ProfileService
  ) { }

  ngOnInit(): void {
  }

  isLoggedIn() {
    console.log(localStorage.getItem("jwt") != null);
    return localStorage.getItem("jwt") != null;
  }

  logout() {
    this.profile.logOut();
  }

}
