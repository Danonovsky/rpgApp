import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameRoutingModule } from './game-routing.module';
import { PanelComponent } from './panel/panel.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PanelComponent
  ],
  imports: [
    FormsModule,
    GameRoutingModule,
    CommonModule
  ]
})
export class GameModule { }
