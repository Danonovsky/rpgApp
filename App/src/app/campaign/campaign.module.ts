import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPublicComponent } from './list-public/list-public.component';
import { CampaignRoutingModule } from './campaign-routing.module';
import { AddComponent } from './add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { SharedModule } from '../shared/shared.module';
import { NgCircleProgressModule } from 'ng-circle-progress';

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
    SharedModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 8,
      innerStrokeWidth: 2,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
      units: '',
      titleFontSize: '20',
      titleColor: '#fff',
      subtitleFontSize: '24'
    })
  ]
})
export class CampaignModule { }
