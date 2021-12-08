import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
    private characterService: CharactersService,
    private toastr: ToastrService
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

  delete(id: string) {
    this.characterService.delete(id).subscribe(_ => {
      this.toastr.success('Character deleted');
      this.refresh();
    }, _ => {
      this.toastr.error('An error occured');
    });
  }

}
