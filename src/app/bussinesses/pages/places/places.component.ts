import {Component, OnInit, ViewChild} from '@angular/core';
import {places} from "../../../public/model/places";
import {MatTable, MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {BussinnessPlacesService} from "../../services/bussinness-places.service";
import {BussinessModel} from "../../../public/model/BussinessModel";
import {BussinessServicesService} from "../../services/bussiness-services.service";
import {Router} from "@angular/router";



@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})


export class PlacesComponent implements OnInit{


  UserId:any;
  constructor(private router: Router,private HttpDataServices:BussinnessPlacesService,private BussinessService:BussinessServicesService) {
    this.PlacesData={} as places;
    this.User={} as BussinessModel;
  }
  ngOnInit(): void {
    this.UserId = Number(localStorage.getItem('id'));
    this.getUserBussiness(this.UserId);
  }
  PlacesData:places;

  PlaceRow!:places;
  User:BussinessModel;
  dataSource=new MatTableDataSource();
  displayedColumns:string[]=['id','name','description','location','country','price','imagenurl','actions','Reviews'];

  @ViewChild(MatPaginator,{static:true})
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!:MatSort;

  UpdateButton(element: any) {
    this.PlaceRow=element;
    this.router.navigate(['/bussiness/places',this.UserId,'update',this.PlaceRow.id]);
  }
  DeleteButton(element: any){
    this.PlaceRow=element;
    this.HttpDataServices.deleteItem(element.id).subscribe();
    this.getAllPlacesbyBussiness(this.UserId);

  }



  getUserBussiness(id:any){
    this.BussinessService.getItem(id).subscribe((response:any)=>{
      this.User=response;
      console.log(this.User)
      this.getAllPlacesbyBussiness(this.User.id);
    });
  }
  getAllPlacesbyBussiness(bussinessid:number){
    this.HttpDataServices.getItemByBussiness(bussinessid).subscribe((response: any) =>{
      this.dataSource.data = response;
    });
  }

  ViewReview(element:any){

  }
  delete(id:any){
    this.HttpDataServices.deleteItem(id).subscribe();
  }

}


