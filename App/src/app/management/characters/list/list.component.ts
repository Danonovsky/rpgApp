import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterResponse, CharacterSimpleResponse } from '../character.models';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  campaignId: string = '';
  characters: CharacterSimpleResponse[] = [];
  character?: CharacterResponse;

  constructor(
    private route: ActivatedRoute,
    private characterService: CharactersService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('campaignId');
    if(id) {
      this.campaignId = id;
      this.loadAll();
    }
  }

  loadAll() {
    this.characterService.getAllCharacters(this.campaignId).subscribe(_ => {
      this.characters = _.body!;
    });
  }

  loadDetails(id: string) {
    this.characterService.get(id).subscribe(_ => {
      this.character = _.body!;
    });
  }

  refresh() {
    this.loadAll();
  }

}
