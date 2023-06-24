import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {Router} from "@angular/router";
import {BussinnessPlacesService} from "../../../bussinesses/services/bussinness-places.service";
import {BussinessServicesService} from "../../../bussinesses/services/bussiness-services.service";
import {places} from "../../../public/model/places";
import {TravellersService} from "../../services/TravellersService";
import {TravellerModel} from "../../../public/model/TravellerModel";

@Component({
  selector: 'app-view-places',
  templateUrl: './view-places.component.html',
  styleUrls: ['./view-places.component.css']
})
export class ViewPlacesComponent  implements OnInit {
  isFavorite: boolean = false;

  @ViewChild(MatPaginator, {static: true})
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  UserId: any;
  dataSource = new MatTableDataSource();
  Placesdata: places;
  Travellerdata:TravellerModel;
  displayedColumns: string[] = ['id', 'name', 'description', 'location', 'country', 'price', 'imagenurl','favorite'];

  constructor(private router: Router, private HttpDataServices: BussinnessPlacesService, private travellerService:TravellersService) {
    this.Placesdata = {} as places;
    this.Travellerdata = {} as TravellerModel;
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.UserId = Number(localStorage.getItem('id'));
    this.getTravellersById(this.UserId);
    this.getAllPlaces();
  }
  getTravellersById(id:any){
    this.travellerService.getItem(id).subscribe((response:any)=>{
      this.Travellerdata=response;
    });

  }
  getAllPlaces() {
    this.HttpDataServices.getList().subscribe((response: any) => {
      this.dataSource.data = response;
    })
  }


  favoriteButton(element:any){
    element.isFavorite = !element.isFavorite;

  }

}
