import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginRequest } from '../profile.models';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  request: LoginRequest = {
    email: '',
    password: ''
  };

  constructor(
    private profileService: ProfileService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  onSubmit() {
    if(this.form.valid) {
      this.request.email = this.form.value['email'];
      this.request.password = this.form.value['password'];
      this.profileService.login(this.request).subscribe(_ => {
        const token = _.body!.token;
        localStorage.setItem("jwt", token);
        this.toastrService.success('Login attempt successed.');
        this.router.navigate(["/"]);
      }, _ => {
        this.toastrService.error('Login attempt failed.');
      });
    }
  }

}
