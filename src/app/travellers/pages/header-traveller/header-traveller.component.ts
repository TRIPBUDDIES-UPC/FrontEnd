import {Component, OnInit} from '@angular/core';
import {TravellerModel} from "../../../public/model/TravellerModel";
import {TravellersService} from "../../services/TravellersService";
import {Location} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {BussinessServicesService} from "../../../bussinesses/services/bussiness-services.service";

@Component({
  selector: 'app-header-traveller',
  templateUrl: './header-traveller.component.html',
  styleUrls: ['./header-traveller.component.css']
})
export class HeaderTravellerComponent implements OnInit {
  UserTraveller: TravellerModel;
  id: any;
  UserId: any;

  constructor(private TravellerService: TravellersService, private location: Location, private router: Router, private route: ActivatedRoute, private BussinessService: BussinessServicesService) {
    this.UserTraveller = {} as TravellerModel;
  }

  ngOnInit(): void {
    this.UserId = Number(localStorage.getItem('id'));
    console.log(this.UserId)
    this.Getravellersbyid(this.UserId);
    console.log(this.UserTraveller)
  }

  Getravellersbyid(id: Number) {
    this.TravellerService.getItem(id).subscribe((response: any) => {
      this.UserTraveller = response;
    })
  }
}
