import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { LocationService } from '../locations.service';
import { ToastrService } from 'ngx-toastr';
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
    private locationService: LocationService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  reset() {
    this.form.setValue({'name':''});
  }

  onSubmit() {
    if (!this.form.valid) {
      this.toastr.error('Invalid input', 'Error');
    } else {
      this.locationService.add({
        name: this.form.value['name'],
        campaignId: this.campaignId
      }).subscribe(_ => {
        this.toastr.success('Location added', 'Success');
        this.onAdd.emit("added");
        document.getElementById('addClose')?.click();
      }, _ => {
        this.toastr.error('An error occured.');
      });
    }
  }

}
