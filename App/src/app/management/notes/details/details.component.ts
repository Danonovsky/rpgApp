import { Component, Input, OnInit } from '@angular/core';
import { NoteResponse } from '../notes.models';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() note?: NoteResponse;
  constructor() { }

  ngOnInit(): void {
  }

}
