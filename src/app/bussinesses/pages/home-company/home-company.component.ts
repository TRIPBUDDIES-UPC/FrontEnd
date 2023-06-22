import { Component } from '@angular/core';
import {BussinessModel} from "../../../public/model/BussinessModel";
import {Location} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {BussinessServicesService} from "../../services/bussiness-services.service";

@Component({
  selector: 'app-home-company',
  templateUrl: './home-company.component.html',
  styleUrls: ['./home-company.component.css']
})
export class HomeCompanyComponent {
  UserBussiness : BussinessModel;
  id: any;
  UserId:any;

  constructor(private location: Location,private router: Router, private route: ActivatedRoute,private BussinessService: BussinessServicesService) {
    this.UserBussiness = {} as BussinessModel;
  }
  ngOnInit(): void {
    this.UserId = Number(localStorage.getItem('id'));
    this.getBussinessByID(this.UserId);
  }

  getBussinessByID(id: Number){
    this.BussinessService.getItem(id).subscribe((response:any)=>{
      this.UserBussiness=response;
    })
  }

}
