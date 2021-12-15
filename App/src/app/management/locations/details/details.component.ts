import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LocationResponse } from '../locations.models';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() location?: LocationResponse;
  @Output() onUpdate = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onUpload(event: string) {
    this.location!.url = event;
    this.onUpdate.emit();
  }

}
