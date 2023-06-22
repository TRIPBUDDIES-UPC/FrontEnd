import { Component } from '@angular/core';
import {BussinessModel} from "../../../public/model/BussinessModel";
import {Location} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {BussinessServicesService} from "../../services/bussiness-services.service";

@Component({
  selector: 'app-profile-bussiness',
  templateUrl: './profile-bussiness.component.html',
  styleUrls: ['./profile-bussiness.component.css']
})
export class ProfileBussinessComponent {

  mostrarCard = false;

  UserBussiness : BussinessModel;
  id: any;
  UserId:any;

  constructor(private location: Location,private router: Router, private route: ActivatedRoute,private BussinessService: BussinessServicesService) {
    this.UserBussiness = {} as BussinessModel;
  }

  ngOnInit(): void {
    this.UserId = Number(localStorage.getItem('id'));
    console.log(this.UserId);
    this.getBussinessByID(this.UserId);
  }

  getBussinessByID(id: Number){
    this.BussinessService.getItem(id).subscribe((response:any)=>{
      this.UserBussiness=response;
    })
  }
}
