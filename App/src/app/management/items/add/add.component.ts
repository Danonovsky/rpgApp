import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ItemService } from '../item.service';

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
    private itemService: ItemService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
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
      this.itemService.add({
        name: this.form.value['name'],
        description: this.form.value['description'],
        campaignId: this.campaignId
      }).subscribe(_ => {
        this.toastr.success('Item added', 'Success');
        this.onAdd.emit("added");
        document.getElementById('addClose')?.click();
      }, _ => {
        this.toastr.error('An error occured.');
      });
    }
  }
}
