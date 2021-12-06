import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CampaignService } from 'src/app/campaign/campaign.service';
import { Characteristic, CharacterRollRequest, Skill } from '../character.models';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  @Input() campaignId: string = '';
  system: string = '';
  races: string[] = [];
  characteristics: Characteristic[] = [];
  skills: Skill[] = [];
  race: string = '';

  constructor(
    private charactersService: CharactersService,
    private campaignService: CampaignService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.campaignService.get(this.campaignId).subscribe(_ => {
      this.system = _.body?.system!;
      this.getRaces();
    });
  }

  getRaces() {
    this.charactersService.getRaces(this.system).subscribe(_ => {
      this.races = _.body!;
      console.log(this.races);
    });
  }

  rollCharacter() {
    if(this.race) {
      this.charactersService.rollCharacter({ race: this.race, systemName: this.system}).subscribe(_ => {
        this.characteristics = _.body?.characteristics!;
        this.skills = _.body?.skills!;
      });
    } else {
      this.toastr.error('You need to select race!');
    }
    
  }

  reset() {
    this.characteristics = [];
    this.skills = [];
  }

}
