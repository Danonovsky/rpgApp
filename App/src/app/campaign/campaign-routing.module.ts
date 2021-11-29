import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPublicComponent } from './list-public/list-public.component';

const routes: Routes = [
  {path: 'public', component: ListPublicComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignRoutingModule { }
