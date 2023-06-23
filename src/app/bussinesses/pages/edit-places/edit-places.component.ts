import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {BussinnessPlacesService} from "../../services/bussinness-places.service";
import {BussinessServicesService} from "../../services/bussiness-services.service";
import {places} from "../../../public/model/places";
import {BussinessModel} from "../../../public/model/BussinessModel";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-places',
  templateUrl: './edit-places.component.html',
  styleUrls: ['./edit-places.component.css']
})
export class EditPlacesComponent {
  @ViewChild('BussinessForm',{static:false})
  BussinessForm!:NgForm;
  UserId:any;
  PlaceId:any;
  constructor(private route: ActivatedRoute,private HttpDataServices:BussinnessPlacesService,private BussinessService:BussinessServicesService) {
    this.PlacesData={} as places;
    this.User={} as BussinessModel;
  }
  ngOnInit(): void {

    this.UserId = Number(localStorage.getItem('id'));
    this.PlaceId = Number(this.route.snapshot.paramMap.get('Updateid'));
    console.log(this.PlaceId)
    console.log(this.UserId)
    this.getPlaceById(this.PlaceId);
    this.getUserBussiness(this.UserId);
  }
  PlacesData:places;
  User:BussinessModel;

  getUserBussiness(id:any){
    this.BussinessService.getItem(id).subscribe((response:any)=>{
      this.User=response;
      console.log(this.User);
    })
  }
  getPlaceById(id:any){
    this.HttpDataServices.getItem(id).subscribe((response: any) =>{
    this.PlacesData=response;
    });
  }


  onSumit(){
    if(this.BussinessForm.form.valid){
      console.log('valid');
      this.update();
    }
    else{
      console.log('invalid data');
    }
  }

  update(){
    this.HttpDataServices.updateItem(this.PlaceId,this.PlacesData).subscribe();
  }
}
