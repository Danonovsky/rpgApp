import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { CharactersRoutingModule } from './characters-routing.module';
import { HomeComponent } from '../home/home.component';

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule
  ]
})
export class CharactersModule { }
