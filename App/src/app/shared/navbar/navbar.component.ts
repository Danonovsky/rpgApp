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
    var result = localStorage.getItem("jwt");
    if(result === null) {
      this.profile.logOut();
      return false;;
    }
    return true;
  }

  logout() {
    this.profile.logOut();
  }

}
