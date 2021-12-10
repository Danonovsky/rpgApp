import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersModule } from './characters/characters.module';
import { LocationsModule } from './locations/locations.module';
import { PlayersModule } from './players/players.module';
import { ItemsModule } from './items/items.module';
import { NotesModule } from './notes/notes.module';
import { HomeComponent } from './home/home.component';
import { ManagementRoutingModule } from './management-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    HomeComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    CharactersModule,
    LocationsModule,
    PlayersModule,
    ItemsModule,
    NotesModule,
    SharedModule
  ],
  exports: [
    HomeComponent
  ]
})
export class ManagementModule { }
