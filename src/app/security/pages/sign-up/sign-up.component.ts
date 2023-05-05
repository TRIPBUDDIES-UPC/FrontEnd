import {Component, OnInit, ViewChild} from '@angular/core';
import {SecuModel} from "../../model/model";
import {SecurityService} from "../../service/security.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormGroup, FormBuilder, Validators, Form, AbstractControl, ValidationErrors, NgForm} from "@angular/forms";
import {Observable} from "rxjs";
import {ToastrService} from "ngx-toastr";
import {map} from "rxjs/operators";
import * as _ from "lodash";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
  submitted = false;
  users: SecuModel;
  secuTypeOptions = ['viajero', 'empresa'];
  isEditMode: boolean = false;

  @ViewChild('userForm', { static: false })
  userForm!: NgForm;
  registerForm: FormGroup= this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    type: ['',[Validators.required]]
  });
  constructor(private  formBuilder: FormBuilder, private  authService: SecurityService, private router: Router,
              ) {
    this.users = { } as SecuModel
  }
  get f() { return this.registerForm.controls; }

  ngOnInit(): void {

  }
  addUser(){
    this.authService.create(this.userForm.value).subscribe(response =>{
      this.userForm.reset()
      this.router.navigate(['sign-in'])
    })
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    const user = {
      name: this.registerForm.value.name,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      type: this.registerForm.value.type
    }

    this.authService.getAll().subscribe((response:any) => {
      const existingUser = response.find((u:any) => u.email === user.email);
      if(existingUser) {
        alert("User with this email already exists!");
        return;
      }
      this.authService.create(user).subscribe((response:any) => {
        alert("Registration successful!");
        this.router.navigate(['/sign-in']);
      });
    });
  }
}
