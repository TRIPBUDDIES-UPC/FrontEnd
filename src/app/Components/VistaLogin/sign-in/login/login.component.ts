import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private dataservice:DataService,private formBuilder: FormBuilder, private router: Router,private loginservice:LoginService) { }

  ngOnInit() {
  }
  
login(form:NgForm){
  const email=form.value.email;
  const password=form.value.password;
  this.loginservice.login(email,password);
  this.dataservice.cargarDatos();
  
}



  
}
