import {Component, OnInit} from '@angular/core';
import {SecuModel} from "../../public/model/model";
import {SecurityService} from "../../public/service/security.service";
import {ActivatedRoute} from "@angular/router";
import { MatSelectChange } from '@angular/material/select';
import { Router } from '@angular/router';
import {TemplateService} from "../../../../Shared/template.service";

@Component({
  selector: 'app-header-users',
  templateUrl: './header-users.component.html',
  styleUrls: ['./header-users.component.css']
})




export class HeaderUsersComponent implements  OnInit{
  options:Select[]=[
    {value:'option1',viewValue:'Profile'},
    {value:'option2',viewValue:'Salir'},
  ];

  title: String | any;
  id: any;
  UserData: SecuModel;




  constructor(private router: Router,private userService: TemplateService, private route: ActivatedRoute) {
    this.UserData = {} as SecuModel;

  }

  opcionSeleccionada(event: MatSelectChange) {
    const valorSeleccionado = event.value;
    // Realiza la acción deseada utilizando el valor seleccionado
    if(valorSeleccionado=="option2"){
      this.router.navigateByUrl('sign-in')
    }
    else{
      this.router.navigateByUrl('/profile/'+this.UserData.id)

    }
  }
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get("id"));
    this.getUserByID(Number(this.id))
  }

  getUserByID(id: number){
    this.userService.getById(id).subscribe((response:any)=>{
      this.UserData = response;
      this.title = response.name;
    })
  }
  getAll(){
    this.userService.getAll().subscribe((response:any)=>{
      this.UserData = response;
    });
  }



}
interface Select {
  value:string;
  viewValue: string;
}
