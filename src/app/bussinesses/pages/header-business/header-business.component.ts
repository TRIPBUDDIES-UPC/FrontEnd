import { Location } from '@angular/common';
import {Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute,Params , Router} from "@angular/router";
import {BussinessModel} from "../../../public/model/BussinessModel";
import {BussinessServicesService} from "../../services/bussiness-services.service";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {toInteger} from "lodash";
@Component({
  selector: 'app-header-business',
  templateUrl: './header-business.component.html',
  styleUrls: ['./header-business.component.css']
})
export class HeaderBusinessComponent implements OnInit{
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

