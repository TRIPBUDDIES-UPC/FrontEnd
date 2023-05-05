import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BehaviorSubject} from "rxjs";
import {SecurityService} from "./security/service/security.service";
import {SecuModel} from "./security/model/model";

class CouponService {
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 id:any;
  currentUser : SecuModel;
  Type :String = '';
  constructor(public authService: SecurityService, private route: ActivatedRoute) {
    this.currentUser = {} as SecuModel
  }
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get("id"));
    this.getUsersById(Number(this.id));
    //this.getUserType(Number(this.id), this.Type)
  }

  getUsersById(id:number){
    this.authService.getById(id).subscribe((response: any) =>{
      this.currentUser = response;
      this.Type = response.type;
    })
  }
  getAll(){
    this.authService.getAll().subscribe((response:any) => {
      this.currentUser = response;
    })
  }
  /*
  getUserType(id:number, type :String){
    this.authService.getById(id).subscribe((response:any)=>{
      this.Type = response.type;
    })
  }*/

}
