import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { DetailsComponent } from './details/details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ItemsRoutingModule } from './items-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListComponent,
    AddComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ItemsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ItemsModule { }
