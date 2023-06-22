import {Component, OnInit, ViewChild} from '@angular/core';
import {TravellerProfile} from "../../model/TravellerProfile";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {DialogBoxInvalidFormComponent} from "../sign-in/dialog-box-invalid-form/dialog-box-invalid-form.component";
import {MatDialog} from "@angular/material/dialog";
import {TemplateService} from "../../../../../Shared/template.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
  userTraveller: Array<any>= [];
  userBussiness: Array<any>= [];

  digitalProfile!: TravellerProfile;
  loggedIn = false;
  registered = false;
  logger: string = 'traveller';
  loginForm: FormGroup = this.formBuilder.group({
    email : ["", {validators: [Validators.required, Validators.email], updateOn: 'change'}],
    password : ["", {validators: [Validators.required, Validators.minLength(8)], updateOn: 'change'}],
  });
  constructor(private formBuilder:FormBuilder, public dialog: MatDialog, private router: Router, private service: TemplateService){
    this.digitalProfile = {} as TravellerProfile;
  }
  ngOnInit(): void {
    this.setEmailValidation();
    this.setPaswordValidation();
    this.service.getTravellerAll().subscribe((data: any) => {
      this.userTraveller = data;
    });
    this.service.getBussinessAll().subscribe((data: any) => {
      this.userBussiness = data;
    });
  }
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  setEmailValidation() {
    const emailControl = this.loginForm.get('email');
    //Default validation
    emailControl?.setValidators([Validators.required, Validators.email, Validators.pattern('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')]);
    this.loginForm.get('email')?.valueChanges.subscribe(value => {
      if (value === 'admin@tripBuddies.com') {
        this.loginForm.get('email')?.setValidators([Validators.required]);
      } else {
        this.loginForm.get('email')?.setValidators([Validators.required, Validators.email, Validators.pattern('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')]);
      }
      this.loginForm.get('email')?.updateValueAndValidity();
    });
  }
  submitForm() {
    console.log(this.loginForm.valid);
    this.loggedIn = true;
  }
  back(): void {
    window.location.href = 'https://tripbuddies-upc.github.io/Landing-Page/';
  }
  setPaswordValidation() {
    this.loginForm.get('password')?.valueChanges.subscribe(value => {
      if (value.length < 8 || value.length > 16) {
        this.loginForm.get('password')?.setValidators([Validators.required, Validators.minLength(8), Validators.maxLength(16)]);
      } else {
        this.loginForm.get('password')?.setValidators([Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,16}$')]);
      }
      this.loginForm.get('password')?.updateValueAndValidity();
    });
  }

  openDialog(): void {
    this.registered = false;
    if (this.loginForm.invalid) {
      if(this.loginForm.get('email')?.value === '' && this.loginForm.get('password')?.value === '') {
        this.dialog.open(DialogBoxInvalidFormComponent, {
          data: { message: 'Please fill all the required fields'},
        });
      }
      else if(this.loginForm.get('email')?.value === '' && this.loginForm.get('password')?.value !== '') {
        this.dialog.open(DialogBoxInvalidFormComponent, {
          data: { message: 'Please fill the email field'},
        });
      }
      else {
        this.dialog.open(DialogBoxInvalidFormComponent, {
          data: { message: 'Please fill the password field'},
        });
      }
    }
    else {
      this.verifyAccount();
    }
  }
  goUserTraveller(id : any) {
    localStorage.setItem("id", id);
    this.router.navigate([`/travellers/home/${id}`]);
  }

  goUserBussiness(id : any) {
    localStorage.setItem("id", id);
    this.router.navigate([`/bussiness/home/${id}`]);
  }

  verifyAccount() {
    let email = this.loginForm.get('email')?.value;
    let password = this.loginForm.get('password')?.value;

    if (email!== null && password!== null) {
      if (this.logger === 'traveller') {
        for (let i = 0; i < this.userTraveller.length; i++) {
          if (this.userTraveller[i].email === email && this.userTraveller[i].password === password) {
            this.goUserTraveller(this.userTraveller[i].id);
            this.registered = true;
            break;
          }
        }
      }
      else{
        for (let i = 0; i < this.userBussiness.length; i++) {
          if (this.userBussiness[i].email === email && this.userBussiness[i].password === password) {
            this.goUserBussiness(this.userBussiness[i].id);
            this.registered = true;
            break;
          }
        }

      }
    }
    if(!this.registered) {
      this.dialog.open(DialogBoxInvalidFormComponent, {
        data: { message: 'Email or password incorrect'},
      });
    }
  }
}
