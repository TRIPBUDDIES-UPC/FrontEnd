import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {TravellerModel} from "../../public/model/TravellerModel";
import {catchError, retry} from "rxjs/operators";
import {favoritesModels} from "../../public/model/FavoritesModels";

@Injectable({
  providedIn: 'root'
})
export class FavoriteServiceService {
  base_url: string = 'http://localhost:3000/favorites';


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) { }
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log(`An error occurred: ${error.error.message}`);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
    return throwError(
      'something happened with request, please try again later'
    );
  }
  createItem(item: any): Observable<favoritesModels>{
    return this.http
      .post<favoritesModels>(this.base_url, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError))
  }

  ///* GET */
  getList(): Observable<favoritesModels>{
    return this.http
      .get<favoritesModels>(this.base_url)
      .pipe(retry(2), catchError(this.handleError))
  }
  getListbyid(id:any): Observable<favoritesModels>{
    return this.http
      .get<favoritesModels>(this.base_url+"?travellerId.id="+id)
      .pipe(retry(2), catchError(this.handleError))
  }
  getItem(id: any): Observable<favoritesModels>{
    return this.http
      .get<favoritesModels>(this.base_url + '/' + id)
      .pipe(retry(2), catchError(this.handleError))
  }

  /* update. usa el put: actualiza datos*/
  updateItem(id: any, item: any): Observable<favoritesModels>{
    return this.http /* se actualiza el item en formato JSON en la url dada */
      .put<favoritesModels>(this.base_url + '/' + id, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError))
  }
  /* delete */
  deleteItem(id: any): Observable<favoritesModels>{
    return this.http
      .delete<favoritesModels>(`${this.base_url}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError))
  }
}
