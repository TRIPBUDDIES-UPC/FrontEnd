import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
 constructor(private dataservice:DataService, private router: Router,private loginservice:LoginService){

 }
  
  onSubmit(form:NgForm){
    const email=form.value.email;
    const password=form.value.password;
    this.loginservice.createuser(email,password);
  }
}
