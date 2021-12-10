import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: ':campaignId/home', component: HomeComponent },
  { path: ':campaignId/characters', loadChildren: () => import('./characters/characters.module').then(m => m.CharactersModule) },
  { path: ':campaignId/items', loadChildren: () => import('./items/items.module').then(m => m.ItemsModule) },
  { path: ':campaignId/locations', loadChildren: () => import('./locations/locations.module').then(m => m.LocationsModule) },
  { path: ':campaignId/notes', loadChildren: () => import('./notes/notes.module').then(m => m.NotesModule) },
  { path: ':campaignId/players', loadChildren: () => import('./players/players.module').then(m => m.PlayersModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
