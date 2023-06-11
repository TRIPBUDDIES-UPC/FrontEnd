import { Component } from '@angular/core';
import {SecuModel} from "../../public/model/model";
import {SecurityService} from "../../public/service/security.service";
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-profile-users',
  templateUrl: './profile-users.component.html',
  styleUrls: ['./profile-users.component.css']
})
export class ProfileUsersComponent {

  id: any;
  UserData: SecuModel;
  buttonDisabled = false;
  dataSource=new MatTableDataSource();
  showElement: boolean = false;

  myForm = new FormGroup({
    Age: new FormControl(''),
    phone: new FormControl(''),
    // Otros campos del formulario
  });



  constructor(private userService: SecurityService, private route: ActivatedRoute) {
    this.UserData = {} as SecuModel;

  }
  onSubmit() {
    // Lógica para manejar la submisión del formulario
    console.log(this.myForm.value);
    this.myForm.reset(); // Restablecer los valores del formulario
    this.buttonDisabled = !this.buttonDisabled; // Cambiar el estado del botón al hacer clic
    this.showElement = !this.showElement;
    this.update();

  }
   toggleElement(){
     this.showElement = !this.showElement;
     this.buttonDisabled = !this.buttonDisabled; // Cambiar el estado del botón al hacer clic
  }
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get("id"));
    this.getUserByID(Number(this.id))
    this.getAll();
  }





  getUserByID(id: number){
    this.userService.getById(id).subscribe((response:any)=>{
      this.UserData = response;
    })
  }



  update() {
    this.userService.update(this.id, this.UserData).subscribe();
  }
  getAll(){
    this.userService.getAll().subscribe((response:any)=>{
      this.dataSource.data= response;
    });
  }


}
