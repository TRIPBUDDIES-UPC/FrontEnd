import {Component, OnInit} from '@angular/core';
import {BussinessModel} from "../../../public/model/BussinessModel";
import {Review} from "../../../users/destinations/models/review.model";
import {places} from "../../../public/model/places";
import {MatTableDataSource} from "@angular/material/table";
import {BussinnessPlacesService} from "../../services/bussinness-places.service";
import {ReviewService} from "../../../travellers/services/review.service";
import {ActivatedRoute} from "@angular/router";
import {BussinessServicesService} from "../../services/bussiness-services.service";

@Component({
  selector: 'app-view-reviews',
  templateUrl: './view-reviews.component.html',
  styleUrls: ['./view-reviews.component.css']
})
export class ViewReviewsComponent implements OnInit{
  PlacesId:any;
  UserId:any;
  BussinesData:BussinessModel;
  placesData:places;
  reviewsdata:Review;
  dataSource = new MatTableDataSource<places>();
  dataSourceReviews = new MatTableDataSource<Review>();

  displayedColumns: string[] = [ 'name', 'description', 'location', 'country', 'price', 'imagenurl'];
  displayedColumnsReviews: string[] = [ 'FirstName', 'LastName', 'Description', 'place', 'DescriptionPlaces', 'Review'];

  constructor(private route:ActivatedRoute,private bussinessService:BussinessServicesService,private placesService:BussinnessPlacesService,private ReviewService:ReviewService) {
    this.BussinesData={} as BussinessModel;
    this.placesData={} as places;
    this.reviewsdata={} as Review;
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.PlacesId = +params['id']; // El "+" convierte el parámetro en un número
    });    this.route.params.subscribe(params => {
      this.UserId = +params['userid']; // El "+" convierte el parámetro en un número
    });
    this.getPlacesbyId(this.PlacesId);
    console.log(this.placesData);
    this.getBussinesByid(this.UserId);
    this.getReviewsByPlaceid(this.PlacesId);
  }

  getPlacesbyId(id:any){
    this.placesService.getItem(id).subscribe((response:any)=>{
      this.dataSource.data=[response];
    });
  }
  getBussinesByid(id:any){
    this.bussinessService.getItem(id).subscribe((response:any)=>{
      this.BussinesData=response;
    });
  }
  getReviewsByPlaceid(placeId:any){
    this.ReviewService.getListByPlaceid(placeId).subscribe((response:any)=>{
      this.dataSourceReviews.data=response;
      console.log(this.dataSourceReviews.data);
    })

  }


}
