import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ItemResponse } from '../items.models';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() item?: ItemResponse;
  @Output() onUpdate = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onUpload(event: string) {
    this.item!.url = event;
    this.onUpdate.emit();
  }
}
