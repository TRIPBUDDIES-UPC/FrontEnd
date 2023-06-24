import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {TravellerModel} from "../../../model/TravellerModel";
import {SecurityService} from "../../../service/security.service";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {DialogBoxInvalidFormComponent} from "../dialog-box-invalid-form/dialog-box-invalid-form.component";
import {TemplateService} from "../../../../../../Shared/template.service";
@Component({
  selector: 'app-traveller',
  templateUrl: './traveller.component.html',
  styleUrls: ['./traveller.component.css']
})
export class TravellerComponent implements OnInit{
  mismatch: boolean = false;
  registerForm!: FormGroup;
  userTral: any;
  pass: String = '';
  registered: boolean = false;
  Traveller:TravellerModel;
  constructor(private service: TemplateService, private formBuilder: FormBuilder, public dialog: MatDialog, private rooter: Router) {
    this.userTral = {} as any;
    this.Traveller = {} as TravellerModel;
    this.userTral = {} as any;
    this.registerForm = this.formBuilder.group({
        first_name: new FormControl('', { validators:  [Validators.required], updateOn: 'change' }),
        last_name: new FormControl('', { validators:  [Validators.required], updateOn: 'change' }),
        phone:new FormControl('', { validators:  [Validators.required, Validators.minLength(9), Validators.maxLength(9), Validators.pattern('^[0-9]*$')], updateOn: 'change' }),
        email: new FormControl('', { validators:  [Validators.required, Validators.email, Validators.pattern('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')], updateOn: 'change' }),
        password: new FormControl('', { validators:  [Validators.required, Validators.minLength(8), Validators.maxLength(16)], updateOn: 'change' }),
        password_confirm: new FormControl('', { validators: [Validators.required, Validators.minLength(8), Validators.maxLength(16)], updateOn: 'change' }),
      },
      {
        validators: this.MustMatch( 'password', 'password_confirm')
      },
    );
  }

  ngOnInit(): void {
    this.setEmailValidation();
    this.setPhoneValidation();
    this.setPaswordValidation();
  }
  openDialog() {
    if (this.registerForm.invalid) {
      if(this.registerForm.get('password')?.value !== this.registerForm.get('password_confirm')?.value) {
        this.dialog.open(DialogBoxInvalidFormComponent, {
          data: {message: 'Please confirm the same password!'},
        });
      }
      else{
        this.dialog.open(DialogBoxInvalidFormComponent, {
          data: {message: 'Please fill all the required fields!'},
        });
      }
    }
    else {
      this.verifyTravellerUnregistered();
      if(!this.registered) {
        this.AddTraveller();
        this.dialog.open(DialogBoxInvalidFormComponent, {
          data: {message: 'You have registered successfully! You will be redirect to login page to Log In'}
        });
        this.rooter.navigate(['/login']);
      }
      else {
        this.dialog.open(DialogBoxInvalidFormComponent, {
          data: {message: 'This email is already registered!'},
        });
      }

    }
  }
  AddTraveller() {
    this.Traveller.first_name =  this.registerForm.get('first_name')?.value;
    this.Traveller.last_name =  this.registerForm.get('last_name')?.value;
    this.Traveller.phone =  this.registerForm.get('phone')?.value;
    this.Traveller.email =  this.registerForm.get('email')?.value;
    this.Traveller.password =  this.registerForm.get('password')?.value;
    this.Traveller.description =  'I am a traveller';
    this.Traveller.role =  'traveller';
    this.Traveller.image = 'https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg';
    var req = new XMLHttpRequest();
    req.open('POST', 'tripbuddieswebservice-production.up.railway.app/api/v1/traveller', false);
    req.setRequestHeader('Content-Type', 'application/json');
    req.send(JSON.stringify(this.Traveller));
    console.log('Post Traveller');
    console.log(req.responseText);
    if (req.status == 201) {
      this.AddTravellerProfile();
    }
  }
  AddTravellerProfile() {
    var req = new XMLHttpRequest();
    req.open('GET', `tripbuddieswebservice-production.up.railway.app/api/v1/users/searchByEmail/${this.registerForm.get("email")?.value}`, false);
    req.send(null);
    console.log('Get User response');
    console.log(req.responseText);
    if (req.status == 200) {
      this.userTral = JSON.parse(req.responseText);
      console.log('User assigned to userDev');
      console.log(this.userTral);
      var req2 = new XMLHttpRequest();
      req2.open('POST', `tripbuddieswebservice-production.up.railway.app/api/v1/digital_profiles/${this.userTral.id}`, false);
      req2.setRequestHeader('Content-Type', 'application/json');
      console.log('Post Traveller Profile');
      console.log(req2.responseText);

    }
  }
  setPhoneValidation() {
    const phoneControl = this.registerForm.get('phone');
    phoneControl?.setValidators([Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(9), Validators.maxLength(9)]);
    this.registerForm.get('phone')?.valueChanges.subscribe(value => {
      if (value.length < 9 || value.length > 9) {
        this.registerForm.get('phone')?.setValidators([Validators.required, Validators.minLength(9), Validators.maxLength(9)]);
      } else {
        this.registerForm.get('phone')?.setValidators([Validators.required, Validators.pattern('^[0-9]*$')]);
      }
      this.registerForm.get('phone')?.updateValueAndValidity();
    });
  }
  setEmailValidation() {
    const emailControl = this.registerForm.get('email');
    //Default validation
    emailControl?.setValidators([Validators.required, Validators.email, Validators.pattern('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')]);
    this.registerForm.get('email')?.valueChanges.subscribe(value => {
      if (value === 'admin@tripbuddies.com') {
        this.registerForm.get('email')?.setValidators([Validators.required]);
      } else {
        this.registerForm.get('email')?.setValidators([Validators.required, Validators.email, Validators.pattern('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')]);
      }
      this.registerForm.get('email')?.updateValueAndValidity();
    });

  }
  MustMatch( password: any, password_confirm: any) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const passwordConfirmControl = formGroup.controls[password_confirm];

      if (passwordConfirmControl.errors && !passwordConfirmControl.errors['mustMatch']) {
        return;
      }
      if (passwordControl.value !== passwordConfirmControl.value) {
        passwordConfirmControl.setErrors({ MustMatch: true });
      } else {
        passwordConfirmControl.setErrors(null);
      }
    };
  }
  setPaswordValidation() {
    this.registerForm.get('password')?.valueChanges.subscribe(value => {
      if (value.length < 8 || value.length > 16) {
        this.registerForm.get('password')?.setValidators([Validators.required, Validators.minLength(8), Validators.maxLength(16)]);
      } else {
        this.registerForm.get('password')?.setValidators([Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,16}$')]);
      }
      this.registerForm.get('password')?.updateValueAndValidity();
    });
  }
  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }

  get phone() {
    return this.registerForm.get('phone');
  }

  get first_name() {
    return this.registerForm.get('first_name');
  }

  get password_confirm() {
    return this.registerForm.get('password_confirm');
  }

  get last_name() {
    return this.registerForm.get('last_name');
  }

  verifyTravellerUnregistered() {
    this.registered = false;
    var req = new XMLHttpRequest();
    req.open('GET', `tripbuddieswebservice-production.up.railway.app/api/v1/users/searchByEmail/${this.registerForm.get("email")?.value}`, false);
    req.send(null);
    if (req.status == 200) {
      var user = JSON.parse(req.responseText);
      if (user.email == this.registerForm.get('email')?.value) {
        this.registered = true;
      }
    }
  }
}

