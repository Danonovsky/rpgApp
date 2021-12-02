import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { System, systems } from 'src/app/shared/systems';
import { CampaignRequest } from '../campaign.models';
import { CampaignService } from '../campaign.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  form!: FormGroup;
  request: CampaignRequest = {
    name: '',
    description: '',
    isPublic: true,
    system: ''
  };

  systems: System[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private campaignService: CampaignService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [this.request.name, [Validators.required, Validators.minLength(5)]],
      description: [this.request.description, [Validators.required, Validators.maxLength(100)]],
      isPublic: [this.request.isPublic],
      system: [this.request.system, [Validators.required]]
    });
    this.systems = systems;
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
      this.campaignService.add(this.request).subscribe(_ => {
        this.toastrService.success('Campaign added successfuly.');
        this.router.navigateByUrl('/campaign/details/'+_.body?.id);
      }, _ => {
        this.toastrService.error('An error occured. Try again.');
      });
    }
  }

}
