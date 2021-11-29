import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SignupRequest } from '../profile.models';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form!: FormGroup;
  request: SignupRequest = {
    email: '',
    password: '',
    repeatPassword: '',
    name: ''
  }

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private profileService: ProfileService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [this.request.email,[Validators.required, Validators.email]],
      password: [this.request.password, [Validators.required, Validators.minLength(5)]],
      repeatPassword: [this.request.repeatPassword, [Validators.required, Validators.minLength(5)]],
      name: [this.request.name, [Validators.required, Validators.minLength(5)]]
    });
  }

  onSubmit() {
    if(!this.form.valid) {
      this.toastrService.error('Invalid input', 'Error');
    } else {
      this.request = {
        email: this.form.value['email'],
        password: this.form.value['password'],
        repeatPassword: this.form.value['repeatPassword'],
        name: this.form.value['name'],
      }
      this.profileService.signup(this.request).subscribe(_ => {
        this.toastrService.success('Signed up successfuly.');
        this.router.navigateByUrl('/profile/login');
      }, _ => {
        this.toastrService.error('An error occured. Try again.');
      });
    }
  }

}
