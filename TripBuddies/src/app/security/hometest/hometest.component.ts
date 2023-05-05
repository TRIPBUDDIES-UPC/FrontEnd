import {Component, OnInit} from '@angular/core';
import {SecuModel} from "../model/model";
import {SecurityService} from "../service/security.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-hometest',
  templateUrl: './hometest.component.html',
  styleUrls: ['./hometest.component.css']
})
export class HometestComponent implements OnInit{
  currentUser: SecuModel;
  id:any

  constructor(private authService: SecurityService, private route: ActivatedRoute) {
    this.currentUser = {} as SecuModel
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get("id"))
    this.getUsersById(Number(this.id));

  }
  getUsersById(id: number){
    this.authService.getById(id).subscribe((response:any)=>{
      this.currentUser = response;
    })
  }
  getAll(){
    this.authService.getAll().subscribe((response:any)=>{
      this.currentUser = response;
    });
  }
}
