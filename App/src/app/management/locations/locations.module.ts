import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { LocationsRoutingModule } from './locations-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [
    ListComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LocationsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LocationsModule { }
