import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CampaignResponse } from '../campaign.models';
import { CampaignService } from '../campaign.service';
import { environment } from 'src/environments/environment';
import { systems } from 'src/app/shared/systems';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id: string = '';
  item?: CampaignResponse;
  isOwner: boolean = false;
  joined: boolean = false;
  path: string = '';

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
      this.item.url = this.item.url;
      this.isOwner = this.campaignService.isOwner(_.body!.user.id);
      this.checkIfJoined();
    }, _ => {
      this.toastr.error(_.statusText);
    });
  }

  get systemName() {
    return systems.filter(_ => _.value == this.item?.system)[0].name;
  }

  getUrl() {
    return environment.api+this.item!.url;
  }
  checkIfJoined() {
    this.campaignService.findGuest().subscribe(_ => {
      this.joined = _.body!.filter(x => x.id == this.id).length > 0;
    });
  }

  join() {
    //
    this.campaignService.join(this.id).subscribe(_ => {
      this.toastr.success('Joined game!');
    }, _ => {
      this.toastr.error('An error occured. Try again.');
    })
  }

  onUpload(event: string) {
    this.item!.url = event;
  }
}
