import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CampaignResponse } from '../campaign.models';
import { CampaignService } from '../campaign.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id: string = '';
  item?: CampaignResponse;
  isOwner: boolean = false;

  constructor(
    private campaignService: CampaignService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id")!;
    if(!this.id) {
      this.router.navigate(["/campaigns"]);
    }
    this.campaignService.get(this.id!).subscribe(_ => {
      this.item = _.body!;
      this.isOwner = this.campaignService.isOwner(_.body!.user.id);
    }, _ => {
      this.toastr.error(_.statusText);
    });
  }
}
