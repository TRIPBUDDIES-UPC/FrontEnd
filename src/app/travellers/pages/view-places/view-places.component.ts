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
import {favoritesModels} from "../../../public/model/FavoritesModels";
import {FavoriteServiceService} from "../../services/favorite-service.service";

@Component({
  selector: 'app-view-places',
  templateUrl: './view-places.component.html',
  styleUrls: ['./view-places.component.css']
})
export class ViewPlacesComponent  implements OnInit {
  @ViewChild(MatPaginator, {static: true})
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  UserId: any;
  dataSource = new MatTableDataSource();
  Placesdata: places;
  Travellerdata:TravellerModel;
  Favoritedata:favoritesModels;

  displayedColumns: string[] = ['id', 'name', 'description', 'location', 'country', 'price', 'imagenurl','favorite','Review'];

  constructor(private router: Router,private favoriteService:FavoriteServiceService, private HttpDataServices: BussinnessPlacesService, private travellerService:TravellersService) {
    this.Placesdata = {} as places;
    this.Travellerdata = {} as TravellerModel;
    this.Favoritedata = {} as favoritesModels;

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
  getPlacesById(id:any){
    this.HttpDataServices.getItem(id).subscribe((response:any)=>{
      this.Placesdata=response;
      console.log(this.Placesdata)
      this.Favoritedata.places=this.Placesdata;
      console.log(this.Favoritedata.places)
      this.Favoritedata.traveller=this.Travellerdata;
      this.createFavorite(this.Favoritedata);

    });
  }
  createFavorite(model:any){
    this.favoriteService.createItem(model).subscribe((response:any)=>
    {
      console.log(response);
    });
  }
  deleteFavorite(id:any){
    this.favoriteService.deleteItem(id).subscribe();
  }

  getAllPlaces() {
    this.HttpDataServices.getList().subscribe((response: any) => {
      this.dataSource.data = response;
    })
  }

  getFavoritebyId(id:any){
    this.favoriteService.getItem(id).subscribe((response)=>{

    });
  }

  ValueTrue(id:any){
    this.HttpDataServices.getItem(id).subscribe((response:any)=>{

    });
    this.favoriteService.getList().subscribe((response:any)=>
    {

    });
  }


  favoriteButton(element:any){
    element.favorite = !element.favorite;
    if(element.favorite==true){
     this.getPlacesById(element.id);
    }
    else{
      this.deleteFavorite(element.id);
    }
  }


}
