import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  amount: number = 1;
  dice: number = 10;
  multiplier: number = 1;
  static: number = 0;

  constructor(
    private gameService: GameService
  ) { }

  ngOnInit(): void {
    this.gameService.startConnection();
    this.gameService.addSingleRollListener();
  }

  roll() {
    this.gameService.singleRoll({amount: this.amount, dice: this.dice, multiplier: this.multiplier, static: this.static});
  }

}
