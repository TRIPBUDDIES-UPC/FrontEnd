import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {BussinnessPlacesService} from "../../../bussinesses/services/bussinness-places.service";
import {BussinessServicesService} from "../../../bussinesses/services/bussiness-services.service";
import {places} from "../../../public/model/places";
import {BussinessModel} from "../../../public/model/BussinessModel";
import {TravellerModel} from "../../../public/model/TravellerModel";
import {TravellersService} from "../../services/TravellersService";
import {ReviewsModel} from "../../../public/model/ReviewsModel";
import {MatTableDataSource} from "@angular/material/table";
import {ActivatedRoute} from "@angular/router";
import {ReviewService} from "../../services/review.service";

@Component({
  selector: 'app-add-review-places',
  templateUrl: './add-review-places.component.html',
  styleUrls: ['./add-review-places.component.css']
})
export class AddReviewPlacesComponent implements OnInit{
  ReviewsForm!:NgForm;
  TravellerId:any;
  PlacesId:any;

  ReviewData:ReviewsModel;
  PlacesData:places;
  User:TravellerModel;
  dataSource = new MatTableDataSource<places>();
  displayedColumns: string[] = [ 'name', 'description', 'location', 'country', 'price', 'imagenurl'];
  constructor(private ReviewService:ReviewService,private route: ActivatedRoute,private placesService:BussinnessPlacesService,private travellerService:TravellersService) {
    this.PlacesData={} as places;
    this.User={} as TravellerModel;
    this.ReviewData={} as ReviewsModel;

  }


  onSumit(){
  }

  add(){
    this.createReviews(this.ReviewData);
  }
  createReviews(review:any){
    this.ReviewService.createItem(review).subscribe((response:any)=>{
      console.log(response);
    });


  }
  ngOnInit() {
    this.TravellerId = Number(localStorage.getItem('id'));
    this.route.params.subscribe(params => {
      this.PlacesId = +params['Placesid']; // El "+" convierte el parámetro en un número
    });
    this.GetTravellerId(this.TravellerId);
  }

  GetTravellerId(id:any){
    this.travellerService.getItem(id).subscribe((response:any)=>{
      this.User=response;
      this.ReviewData.traveller=this.User;
      this.GetPlacesId(this.PlacesId);
    });


    }

    GetPlacesId(id:any){
      this.placesService.getItem(id).subscribe((response:any)=>{
        this.ReviewData.places=response;
        this.dataSource.data=[response];
        console.log(this.dataSource.data)
      });
    }


}
