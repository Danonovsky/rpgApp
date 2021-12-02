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
  item?: CampaignResponse

  constructor(
    private campaignService: CampaignService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    if(!id) {
      this.router.navigate(["/campaigns"]);
    }
    console.log(id);
    this.campaignService.get(id!).subscribe(_ => {
      this.item = _.body!;
      console.log(this.item);
    }, _ => {
      this.toastr.error(_.statusText);
    });
  }
}
