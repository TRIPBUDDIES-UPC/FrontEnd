import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient,private loginservice:LoginService) { }

  cargarDatos(){
    const token=this.loginservice.getidtoken();
    return this.httpClient  .get('https://tripbuddies-f7f59-default-rtdb.firebaseio.com/datos.json?auth='+token);
  }

  





}
