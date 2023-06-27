import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {places} from "../../../public/model/places";
import {TravellerModel} from "../../../public/model/TravellerModel";
import {favoritesModels} from "../../../public/model/FavoritesModels";
import {Router} from "@angular/router";
import {FavoriteServiceService} from "../../services/favorite-service.service";
import {BussinnessPlacesService} from "../../../bussinesses/services/bussinness-places.service";
import {TravellersService} from "../../services/TravellersService";

@Component({
  selector: 'app-favorite-traveller',
  templateUrl: './favorite-traveller.component.html',
  styleUrls: ['./favorite-traveller.component.css']
})
export class FavoriteTravellerComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true})
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  UserId: any;
  dataSource = new MatTableDataSource<favoritesModels>([]); // Inicializa el dataSource con un array vacío de tipo favoritesModels
  Placesdata: places;
  Travellerdata:TravellerModel;
  Favoritedata:favoritesModels;
  displayedColumns: string[] = ['id', 'name', 'description', 'location', 'country', 'price', 'imagenurl','favorite'];

  constructor(private router: Router,private favoriteService:FavoriteServiceService, private HttpDataServices: BussinnessPlacesService, private travellerService:TravellersService) {
    this.Placesdata = {} as places;
    this.Travellerdata = {} as TravellerModel;
    this.Favoritedata = {} as favoritesModels;
  }

  ngOnInit() {
    this.UserId = Number(localStorage.getItem('id'));
    console.log(this.UserId)
    this.getTravellersById(this.UserId);
    console.log(this.Travellerdata)
  }
  getTravellersById(id:any){
    this.travellerService.getItem(id).subscribe((response:any)=>{
      this.Travellerdata=response;
      this.getListfavoritesById(this.Travellerdata.id);

    });
  }
  getListfavoritesById(id:any){
    this.favoriteService.getListbyid(id).subscribe((response:any)=>{
      this.Favoritedata = response;
      console.log(this.Favoritedata)
      this.dataSource.data = response;
      console.log(this.dataSource.data);
    });
  }
  createFavorite(model:any){
    this.favoriteService.createItem(model).subscribe();
    console.log(this.Favoritedata)

  }
  deleteFavorite(id:any){
    this.favoriteService.deleteItem(id).subscribe();
  }

  deleteButton(element:any){
    element.favorite = !element.favorite;
      this.deleteFavorite(element.id);
  }
}
