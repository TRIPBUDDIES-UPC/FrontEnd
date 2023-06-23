import {Component, ViewChild} from '@angular/core';
import {BussinessModel} from "../../../public/model/BussinessModel";
import {Location} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {BussinessServicesService} from "../../services/bussiness-services.service";
import {NgForm} from "@angular/forms";
import * as _ from "lodash";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {

  @ViewChild('BussinessForm',{static:false})
  BussinessForm!:NgForm;
  UserBussiness : BussinessModel;
  ListBussiness:BussinessModel;
  id: any;
  UserId:any;

  constructor(private location: Location,private router: Router, private route: ActivatedRoute,private BussinessService: BussinessServicesService) {
    this.UserBussiness = {} as BussinessModel;
    this.ListBussiness={} as BussinessModel;
  }
  ngOnInit(): void {
    this.UserId = Number(localStorage.getItem('id'));
    this.getBussinessByID(this.UserId);

    this.getAlls();
  }

  getAlls(){
    this.BussinessService.getList();
  }

  getBussinessByID(id: Number){
    this.BussinessService.getItem(id).subscribe((response:any)=>{
      this.UserBussiness=response;
    })
  }

  onSumit(){

  }
  Edit(){
    this.BussinessService.updateItem(this.UserId,this.UserBussiness).subscribe()
  }


}
