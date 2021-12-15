import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  @Input() campaignId: string = '';
  @Output() onAdd = new EventEmitter();
  form!: FormGroup;

  constructor(
    private noteService: NoteService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
      description: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  reset() {
    this.form.reset();
  }

  onSubmit() {
    if (!this.form?.valid) {
      this.toastr.error('Invalid input', 'Error');
    } else {
      this.noteService.add({
        title: this.form.value['title'],
        description: this.form.value['description'],
        campaignId: this.campaignId
      }).subscribe(_ => {
        this.toastr.success('Note added', 'Success');
        this.onAdd.emit("added");
        document.getElementById('addClose')?.click();
      }, _ => {
        this.toastr.error('An error occured.');
      });
    }
  }
}
