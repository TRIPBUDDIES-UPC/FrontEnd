import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {catchError, Observable, retry, throwError} from "rxjs";
import {BussinessModel} from "../../public/model/BussinessModel";
import {places} from "../../public/model/places";

@Injectable({
  providedIn: 'root'
})
export class BussinnessPlacesService {
  base_url="http://localhost:3000/Places"
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
  createItem(item: any): Observable<places>{
    return this.http
      .post<places>(this.base_url, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError))
  }

  ///* GET */
  getList(): Observable<places>{
    return this.http
      .get<places>(this.base_url)
      .pipe(retry(2), catchError(this.handleError))
  }




  getItem(id: any): Observable<places>{
    return this.http
      .get<places>(this.base_url + '/' + id)
      .pipe(retry(2), catchError(this.handleError))
  }
  getItemByBussiness(bussinessid: any): Observable<places> {
    return this.http.get<places>(this.base_url + '?bussiness.id=' + bussinessid)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }
  /* update. usa el put: actualiza datos*/
  updateItem(id: any, item: any): Observable<places>{
    return this.http /* se actualiza el item en formato JSON en la url dada */
      .put<places>(this.base_url + '/' + id, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError))
  }
  /* delete */
  deleteItem(id: any): Observable<places>{
    return this.http
      .delete<places>(`${this.base_url}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError))
  }


}
