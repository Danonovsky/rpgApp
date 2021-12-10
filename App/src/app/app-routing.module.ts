import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth-graud.service';

const routes: Routes = [
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'campaign',
    runGuardsAndResolvers: 'paramsOrQueryParamsChange',
    canActivate: [AuthGuard],
    loadChildren: () => import('./campaign/campaign.module').then(m => m.CampaignModule)
  },
  {
    path: 'management',
    runGuardsAndResolvers: 'paramsOrQueryParamsChange',
    canActivate: [AuthGuard],
    loadChildren: () => import('./management/management.module').then(m => m.ManagementModule)
  },
  {
    path: 'game',
    runGuardsAndResolvers: 'paramsOrQueryParamsChange',
    canActivate: [AuthGuard],
    loadChildren: () => import('./game/game.module').then(_ => _.GameModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
