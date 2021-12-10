import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NoteResponse } from '../notes.models';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() note?: NoteResponse;
  @Output() onUpdate = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onUpload(event: string) {
    this.note!.url = event;
    this.onUpdate.emit();
  }

  getUrl() {
    return environment.api+this.note?.url;
  }

}
