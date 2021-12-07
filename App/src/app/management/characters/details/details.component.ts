import { Component, Input, OnInit } from '@angular/core';
import { CharacterResponse } from '../character.models';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() character?: CharacterResponse

  constructor() { }

  ngOnInit(): void {
  }
}
