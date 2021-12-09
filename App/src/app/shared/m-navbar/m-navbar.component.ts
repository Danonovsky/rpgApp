import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-m-navbar',
  templateUrl: './m-navbar.component.html',
  styleUrls: ['./m-navbar.component.css']
})
export class MNavbarComponent implements OnInit {

  constructor() { }

  @Input() page: string = '';
  @Input() campaignId: string = '';

  ngOnInit(): void {
  }

  getActivity(name: string) {
    return name == this.page ? 'active' : '';
  }

}
