import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CharacterResponse } from '../character.models';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() character?: CharacterResponse
  @Output() onUpdate = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onUpload(event: string) {
    this.character!.url = event;
    this.onUpdate.emit();
  }

  getUrl() {
    return environment.api+this.character?.url;
  }
}
