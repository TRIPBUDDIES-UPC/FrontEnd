import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';
import { Router} from '@angular/router';
import { SecurityService } from '../../service/security.service';
import {AppComponent} from "../../../app.component";
import {AuthService} from "../../service/auth.service";
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit{
  loginForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });
  submitted = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.authService.login(this.loginForm.get('email')?.value ?? '', this.loginForm.get('password')?.value).
    subscribe((response) => {
      if (response.token) {
        alert('Login success!!!');
        this.router.navigate(['home/', response.id]);
      } else {
        alert('Invalid credentials');
      }
    });
  }
}
