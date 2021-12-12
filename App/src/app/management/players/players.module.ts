import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { PlayersRoutingModule } from './players-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    PlayersRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PlayersModule { }
