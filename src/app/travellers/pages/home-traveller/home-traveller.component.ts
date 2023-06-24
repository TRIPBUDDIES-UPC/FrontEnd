import {Component, OnInit} from '@angular/core';
import {BussinessModel} from "../../../public/model/BussinessModel";
import {Location} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {BussinessServicesService} from "../../../bussinesses/services/bussiness-services.service";
import {TravellerModel} from "../../../public/model/TravellerModel";
import {TravellersService} from "../../services/TravellersService";

@Component({
  selector: 'app-home-traveller',
  templateUrl: './home-traveller.component.html',
  styleUrls: ['./home-traveller.component.css']
})
export class HomeTravellerComponent implements OnInit{
  UserTraveller:TravellerModel;
  id: any;
  UserId:any;

  constructor(private TravellerService:TravellersService,private location: Location,private router: Router, private route: ActivatedRoute,private BussinessService: BussinessServicesService) {
    this.UserTraveller={} as TravellerModel;
  }
  ngOnInit(): void {
    this.UserId = Number(localStorage.getItem('id'));
    this.Getravellersbyid(this.UserId);
  }

  Getravellersbyid(id: Number){
    this.TravellerService.getItem(id).subscribe((response:any)=>{
      this.UserTraveller=response;
    })
  }












}
