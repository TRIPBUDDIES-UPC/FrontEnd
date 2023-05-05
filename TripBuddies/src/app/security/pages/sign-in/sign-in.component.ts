import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { SecurityService } from '../../service/security.service';
import {AuthService} from "../../service/auth.service";
import {SecuModel} from "../../model/model";
import {AppComponent} from "../../../app.component";
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
  id:any;
  User: SecuModel;
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router,
              private route: ActivatedRoute, private AutID: SecurityService, private  appcomponent: AppComponent) {
    this.User = {} as SecuModel;
  }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get("id"))
    this.getUserById(Number(this.id))
  }
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    /*this.authService.login(this.loginForm.get('email')?.value ?? '', this.loginForm.get('password')?.value).
    subscribe((response) => {
      const user = response.find()
      if (response.token) {
        alert('Login success!!!');
        this.router.navigate(['/home', this.id]);
      } else {
        alert('Invalid credentials');
      }
    });*/
    this.AutID.getAll().subscribe((response:any)=> {
      const User = response.find((a:any) => {
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password;
      });
      if(User){
        alert('Login success!!!');
        this.authService.login(this.loginForm.get('email')?.value
        ?? '', this.loginForm.get('password')?.value).subscribe((response:any)=> {
          this.router.navigate(['home/'], this.id);
        });
      } else{
        alert("user not found");
      }
    })
  }

  private getUserById(id: number) {
    this.AutID.getById(id).subscribe((response:any) =>{
      this.User= response;
    });
  }
  getAll(){
    this.AutID.getAll().subscribe((response:any)=>{
      this.User = response;
    });
  }
}
