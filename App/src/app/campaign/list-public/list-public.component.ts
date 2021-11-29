import { Component, OnInit } from '@angular/core';
import { CampaignResponse } from '../campaign.models';
import { CampaignService } from '../campaign.service';

@Component({
  selector: 'app-list-public',
  templateUrl: './list-public.component.html',
  styleUrls: ['./list-public.component.css']
})
export class ListPublicComponent implements OnInit {
  list: CampaignResponse[] = [];
  isEmpty: boolean = true;

  constructor(
    private campaignService: CampaignService
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.campaignService.findPublic().subscribe(_ => {
      this.list = _.body!;
      this.isEmpty = false;
    }, _ => {
      this.isEmpty = true;
    })
  }

}
