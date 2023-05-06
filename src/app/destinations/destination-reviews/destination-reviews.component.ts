import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DestinationDataService} from "../services/destination-data.service";
import {Review} from "../models/review.model";
@Component({
  selector: 'app-destinations-reviews',
  templateUrl: './destination-reviews.component.html',
  styleUrls: ['./destination-reviews.component.css']
})
export class DestinationsReviewsComponent implements OnInit {

  reviewsData !: Review[];

  constructor(private destinationDataService: DestinationDataService, private router:Router
    ,private activatedRouter: ActivatedRoute) {
    this.activatedRouter.params.subscribe(
      params => {
        console.log(params['id']);
        this.getAllReviews(params['id']);
      }
    )
  }

  ngOnInit() {
  }

  getAllReviews(id: any){
    this.destinationDataService.getReviews(id).subscribe((response:any) => {
      this.reviewsData = response;
    })
  }

  navigateBack(){
    for (let i = 0; i < this.reviewsData.length; i++){
      console.log("Yes");
      console.log(this.reviewsData[i].name);
    }
    this.router.navigate(['destinations']);
  }

}
