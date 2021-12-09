import { Component, Input, OnInit } from '@angular/core';
import { LocationResponse } from '../locations.models';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() location?: LocationResponse;
  constructor() { }

  ngOnInit(): void {
  }

}
