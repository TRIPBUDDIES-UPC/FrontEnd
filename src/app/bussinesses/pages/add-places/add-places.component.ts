import {Component, ViewChild} from '@angular/core';
import {BussinnessPlacesService} from "../../services/bussinness-places.service";
import {BussinessServicesService} from "../../services/bussiness-services.service";
import {places} from "../../../public/model/places";
import {BussinessModel} from "../../../public/model/BussinessModel";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-add-places',
  templateUrl: './add-places.component.html',
  styleUrls: ['./add-places.component.css']
})
export class AddPlacesComponent {
  @ViewChild('BussinessForm',{static:false})
  BussinessForm!:NgForm;
  UserId:any;
  constructor(private HttpDataServices:BussinnessPlacesService,private BussinessService:BussinessServicesService) {
    this.PlacesData={} as places;
    this.User={} as BussinessModel;
  }
  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.UserId = Number(localStorage.getItem('id'));
    this.getAllPlacesbyBussiness(this.UserId);
    this.getUserBussiness(this.UserId);
  }
  PlacesData:places;
  User:BussinessModel;
  dataSource=new MatTableDataSource();
  displayedColumns:string[]=['id','name','description','location','country','price','imagenurl'];

  @ViewChild(MatPaginator,{static:true})
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!:MatSort;

  getUserBussiness(id:any){
    this.BussinessService.getItem(id).subscribe((response:any)=>{
      this.User=response;
      console.log(this.User);
    })
  }
  getAllPlacesbyBussiness(Bussinessid:any){
    this.HttpDataServices.getItemByBussiness(Bussinessid).subscribe((response: any) =>{
      this.dataSource.data = response;
      console.log(this.dataSource.data)
    });
  }
  getAllPlaces(){
    this.HttpDataServices.getList().subscribe((response: any) =>{
      this.dataSource.data = response;
      console.log(this.dataSource.data)
    });
  }

  onSumit(){
    if(this.BussinessForm.form.valid){
      console.log('valid');
      this.add();
    }
    else{
      console.log('invalid data');
    }
  }

  add(){
    this.PlacesData.BussinessId=this.UserId;
    this.HttpDataServices.createItem(this.PlacesData).subscribe((response: any) =>{
    });
  }
}
