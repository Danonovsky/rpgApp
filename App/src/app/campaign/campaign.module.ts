import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPublicComponent } from './list-public/list-public.component';
import { CampaignRoutingModule } from './campaign-routing.module';
import { AddComponent } from './add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ListPublicComponent,
    AddComponent,
    DetailsComponent,
    EditComponent
  ],
  imports: [
    CampaignRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule
  ]
})
export class CampaignModule { }
