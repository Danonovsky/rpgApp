import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersModule } from './characters/characters.module';
import { LocationsModule } from './locations/locations.module';
import { PlayersModule } from './players/players.module';
import { ItemsModule } from './items/items.module';
import { NotesModule } from './notes/notes.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CharactersModule,
    LocationsModule,
    PlayersModule,
    ItemsModule,
    NotesModule
  ]
})
export class ManagementModule { }
