import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  campaignId: string = '';
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const campaignId = this.route.snapshot.paramMap.get('campaignId');
    if(campaignId) {
      this.campaignId = campaignId;
    } else {
      //ble
    }
  }

}
