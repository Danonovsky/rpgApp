import { Component, Input, OnInit } from '@angular/core';
import { CampaignService } from 'src/app/campaign/campaign.service';
import { Characteristic, Skill } from '../character.models';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  @Input() campaignId: string = '';
  system: string = '';
  characteristics: Characteristic[] = [];
  skills: Skill[] = [];

  constructor(
    private charactersService: CharactersService,
    private campaignService: CampaignService
  ) { }

  ngOnInit(): void {
    this.campaignService.get(this.campaignId).subscribe(_ => {
      this.system = _.body?.system!;
    });
  }

  rollCharacter() {
    this.charactersService.rollCharacter(this.campaignId, this.system).subscribe(_ => {
      this.characteristics = _.body?.characteristics!;
      this.skills = _.body?.skills!;
    });
  }

  reset() {
    this.characteristics = [];
    this.skills = [];
  }

}
