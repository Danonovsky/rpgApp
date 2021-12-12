import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CharacterResponse } from '../../characters/character.models';
import { PlayerService } from '../player.service';
import { CampaignPlayerResponse } from '../players.models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  players: CampaignPlayerResponse[] = [];
  availableCharacters: CharacterResponse[] = [];
  campaignId: string = '';

  constructor(
    private playerService: PlayerService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('campaignId');
    if(id) {
      this.campaignId = id;
      this.refresh();
    }
  }

  assignCharacter(playerId: string, characterId: string) {
    if(characterId) {
      if(characterId == '00000000-0000-0000-0000-000000000000') {
        this.playerService.unassignCharacter({
          campaignId: this.campaignId,
          playerId: playerId
        }).subscribe(_ => {
          this.refresh();
          this.toastr.info('Saved changes.');
        }, _ => {
          this.toastr.error('An error occured.');
        });
      } else {
        this.playerService.assignCharacter({
          characterId: characterId,
          playerId: playerId
        }).subscribe(_ => {
          this.refresh();
          this.toastr.info('Saved changes.');
        }, _ => {
          this.toastr.error('An error occured.');
        });
      }
    }
  }

  refresh() {
    this.playerService.getAll(this.campaignId).subscribe(_ => {
      this.players = _.body!;
      console.log(this.players);
    });
    this.playerService.getAvailableCharacters(this.campaignId).subscribe(_ => {
      this.availableCharacters = _.body!;
    });
  }

  delete(id: string) {
    this.playerService.delete(id).subscribe(_ => {
      //
      this.toastr.info('Player removed.');
      this.refresh();
    }, _ => {
      this.toastr.error('An error occured');
    })
  }
}
