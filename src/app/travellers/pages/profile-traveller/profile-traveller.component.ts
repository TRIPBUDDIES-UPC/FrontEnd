import {Component, OnInit, ViewChild} from '@angular/core';
import {delay} from "rxjs";
import {toInteger} from "lodash";
import {BreakpointObserver} from "@angular/cdk/layout";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {TravellerModel} from "../../../public/model/TravellerModel";
import {TravellersService} from "../../services/TravellersService";
import {Location} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {BussinessServicesService} from "../../../bussinesses/services/bussiness-services.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-profile-traveller',
  templateUrl: './profile-traveller.component.html',
  styleUrls: ['./profile-traveller.component.css']
})
export class ProfileTravellerComponent implements OnInit {
  buttonDisabled=false;

  UserTraveller: TravellerModel;
  id: any;
  UserId: any;
  showElement: boolean = false;
  @ViewChild('travellerForm',{static:false})
  travellerForm!:NgForm;
  toggleElement(){
    this.showElement = !this.showElement;
    this.buttonDisabled = !this.buttonDisabled;
  }
  constructor(private TravellerService: TravellersService, private location: Location, private router: Router, private route: ActivatedRoute, private BussinessService: BussinessServicesService) {
    this.UserTraveller = {} as TravellerModel;
  }
  onSumit(){


  }
  cancel(){
    this.showElement = !this.showElement;
    this.buttonDisabled = !this.buttonDisabled;
  }
update(){
  this.buttonDisabled = !this.buttonDisabled; // Cambiar el estado del botón al hacer clic
  this.showElement = !this.showElement;
    this.TravellerService.updateItem(this.UserId,this.UserTraveller)
}

  ngOnInit(): void {
    this.UserId = Number(localStorage.getItem('id'));
    this.Getravellersbyid(this.UserId);
  }

  Getravellersbyid(id: Number) {
    this.TravellerService.getItem(id).subscribe((response: any) => {
      this.UserTraveller = response;
      console.log(this.UserTraveller)
    })
  }
}
