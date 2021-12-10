import { Component, OnInit } from '@angular/core';
import { CampaignResponse } from 'src/app/campaign/campaign.models';
import { CampaignService } from 'src/app/campaign/campaign.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  campaigns: CampaignResponse[] = [];
  api = environment.api;
  isEmpty = true;

  constructor(
    private campaignService: CampaignService
  ) { }

  ngOnInit(): void {
    this.campaignService.findUser().subscribe(_ => {
      console.log(_.body);
      this.campaigns = _.body!;
      this.isEmpty = false;
    });
  }

}
