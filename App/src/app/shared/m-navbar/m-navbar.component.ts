import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-m-navbar',
  templateUrl: './m-navbar.component.html',
  styleUrls: ['./m-navbar.component.css']
})
export class MNavbarComponent implements OnInit {

  constructor() { }

  @Input()
  campaignId: string = '';

  ngOnInit(): void {
  }

}
