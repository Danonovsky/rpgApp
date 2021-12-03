import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CampaignResponse, SetImageUrlRequest } from '../campaign.models';
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
  request?: SetImageUrlRequest;
  imgVisible: boolean = true;

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
      this.item.imageUrl = this.item.imageUrl;
      this.isOwner = this.campaignService.isOwner(_.body!.user.id);
      console.log(this.item);
    }, _ => {
      this.toastr.error(_.statusText);
    });
  }

  get systemName() {
    return systems.filter(_ => _.value == this.item?.system)[0].name;
  }

  getUrl() {
    return environment.api+this.item!.imageUrl;
  }

  join() {
    //
  }

  changeUrl(event: Event) {
    var files = (event.currentTarget as HTMLInputElement).files;
    if(files && files?.length>0) {
      var newFile = files.item(0);
      if(newFile) {
        this.request = {
          campaignId: this.id,
          file: newFile
        };
        var formData = new FormData();
        formData.append('file',newFile, newFile.name);
        this.campaignService.setUrl(this.id,formData).subscribe(_ => {
          if(_.body) {
            this.item!.imageUrl = _.body.url;
            this.toastr.info('Saved changes.');
            /*this.imgVisible = false;
            setTimeout(() => {
              this.imgVisible = true;
            }, 100);*/
            
          }
        }, _ => {
          this.toastr.error(_.statusText);
        })
      }
    }
  }
}
