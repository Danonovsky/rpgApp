import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotesRoutingModule } from './notes-routing.module';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [
    ListComponent,
    AddComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NotesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class NotesModule { }
