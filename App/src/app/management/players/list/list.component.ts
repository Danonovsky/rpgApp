import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PlayerService } from '../player.service';
import { CampaignPlayerResponse } from '../players.models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  players: CampaignPlayerResponse[] = [];
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

  refresh() {
    this.playerService.getAll(this.campaignId).subscribe(_ => {
      this.players = _.body!;
      console.log(this.players);
    });
  }

  // loadDetails(id: string) {
  //   this.noteService.get(id).subscribe(_ => {
  //     this.note = _.body!;
  //   });
  // }

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
