import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NoteService } from '../note.service';
import { NoteResponse } from '../notes.models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  notes: NoteResponse[] = [];
  campaignId: string = '';
  note?: NoteResponse;

  constructor(
    private noteService: NoteService,
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
    this.noteService.getAll(this.campaignId).subscribe(_ => {
      this.notes = _.body!;
    });
  }

  loadDetails(id: string) {
    this.noteService.get(id).subscribe(_ => {
      this.note = _.body!;
    });
  }

  delete(id: string) {
    this.noteService.delete(id).subscribe(_ => {
      //
      this.toastr.info('Note deleted.');
      this.refresh();
    }, _ => {
      this.toastr.error('An error occured');
    })
  }

}
