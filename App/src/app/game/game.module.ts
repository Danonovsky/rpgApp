import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameRoutingModule } from './game-routing.module';
import { PanelComponent } from './panel/panel.component';

@NgModule({
  declarations: [
    PanelComponent
  ],
  imports: [
    GameRoutingModule,
    CommonModule
  ]
})
export class GameModule { }
