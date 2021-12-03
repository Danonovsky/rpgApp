import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CampaignRequest, CampaignResponse } from '../campaign.models';
import { CampaignService } from '../campaign.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id?: string;
  form!: FormGroup;
  request: CampaignRequest = {
    name: '',
    description: '',
    isPublic: true,
    system: ''
  };
  item?: CampaignResponse;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private campaignService: CampaignService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  refreshItem() {
    this.campaignService.get(this.id!).subscribe(_ => {
      this.item = _.body!;
    }, _ => {
      this.router.navigate(["/campaign"]);
    });
  }

  ngOnInit(): void {
    if(this.route.snapshot.paramMap.get("id")) {
      this.id = this.route.snapshot.paramMap.get("id")!;
      this.campaignService.get(this.id!).subscribe(_ => {
        this.item = _.body!;
        this.form = this.formBuilder.group({
          name: [this.item.name, [Validators.required, Validators.minLength(5)]],
          description: [this.item.description, [Validators.required, Validators.maxLength(100)]],
          isPublic: [this.item.isPublic],
          system: [this.item.system, [Validators.required]]
        });
      }, _ => {
        this.router.navigate(["/campaign"]);
      });
      
    }
    else {
      this.router.navigate(["/campaign"]);
    }
  }

  onSubmit() {
    if(!this.form.valid) {
      this.toastrService.error('Invalid input', 'Error');
    } else {
      this.request = {
        name: this.form.value['name'],
        description: this.form.value['description'],
        isPublic: this.form.value['isPublic'],
        system: this.form.value['system']
      }
      this.campaignService.edit(this.request, this.id!).subscribe(_ => {
        this.toastrService.success('Campaign updated successfuly.');
        this.refreshItem();
      }, _ => {
        this.toastrService.error('An error occured. Try again.');
      });
    }
  }
}
