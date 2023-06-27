import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';
import {BussinessModel} from "../../public/model/BussinessModel";
import {ActivatedRoute} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class BussinessServicesService {
  base_url="http://localhost:3000/bussiness"
  constructor(private http:HttpClient, private route: ActivatedRoute) {
  }
  httpOptions={
    headers:new HttpHeaders({'Content-Type':'application/json'})
  }
  /* post */
  handleError(error:HttpErrorResponse)
  {
    if(error.error instanceof ErrorEvent)
    {
      //default
      console.log(`An error ocurred ${error.status},body was: ${error.error}`)
    }else{
      //unsuccessfull
      console.log(`An error ocurred ${error.status},body was: ${error.error}`)
    }
    return throwError(
      'Something happened with request, try again later.'
    )
  }

  /* post */
  createItem(item: any): Observable<BussinessModel>{
    return this.http
      .post<BussinessModel>(this.base_url, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError))
  }

  ///* GET */
  getList(): Observable<BussinessModel>{
    return this.http
      .get<BussinessModel>(this.base_url)
      .pipe(retry(2), catchError(this.handleError))
  }

  getItem(id: any): Observable<BussinessModel>{
    return this.http
      .get<BussinessModel>(this.base_url + '/' + id)
      .pipe(retry(2), catchError(this.handleError))
  }

  /* update. usa el put: actualiza datos*/
  updateItem(id: any, item: any): Observable<BussinessModel>{
    return this.http /* se actualiza el item en formato JSON en la url dada */
      .put<BussinessModel>(this.base_url + '/' + id, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError))
  }
  /* delete */
  deleteItem(id: any): Observable<BussinessModel>{
    return this.http
      .delete<BussinessModel>(`${this.base_url}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError))
  }


}
