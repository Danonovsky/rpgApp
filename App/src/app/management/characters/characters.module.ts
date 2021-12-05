import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { CharactersRoutingModule } from './characters-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [
    ListComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    SharedModule
  ]
})
export class CharactersModule { }
