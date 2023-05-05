import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
//import { Observable } from "rxjs";
//import { StoreProducts } from "../fasty/model/store-products";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  login(dni: number, password: string) {
    return this.http.post('login', { dni, password });
  }
  /*
  getProducts(): Observable<ProductsModel[]>{
  return this.http.get<ProductModel[]>('products)
  }
  */
}
