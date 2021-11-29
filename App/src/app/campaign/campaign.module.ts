import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPublicComponent } from './list-public/list-public.component';
import { CampaignRoutingModule } from './campaign-routing.module';
import { AddComponent } from './add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListPublicComponent,
    AddComponent
  ],
  imports: [
    CampaignRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class CampaignModule { }
