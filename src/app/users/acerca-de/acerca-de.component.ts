import { Component } from '@angular/core';
import {SecuModel} from "../../public/model/model";
import {SecurityService} from "../../public/service/security.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent {
  title: String | any;
  id: any;
  UserData: SecuModel;

  constructor(private userService: SecurityService, private route: ActivatedRoute) {
    this.UserData = {} as SecuModel;

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
