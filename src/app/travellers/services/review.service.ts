import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {favoritesModels} from "../../public/model/FavoritesModels";
import {catchError, retry} from "rxjs/operators";
import {Review} from "../../users/destinations/models/review.model";

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  base_url: string = 'http://localhost:3000/Reviews';


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
  createItem(item: any): Observable<Review>{
    return this.http
      .post<Review>(this.base_url, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError))
  }
  getListByPlaceid(id:any): Observable<Review>{
    return this.http
      .get<Review>(this.base_url+"?places.id="+id)
      .pipe(retry(2), catchError(this.handleError))
  }
  ///* GET */
  getList(): Observable<Review>{
    return this.http
      .get<Review>(this.base_url)
      .pipe(retry(2), catchError(this.handleError))
  }
  getItem(id: any): Observable<Review>{
    return this.http
      .get<Review>(this.base_url + '/' + id)
      .pipe(retry(2), catchError(this.handleError))
  }

  /* update. usa el put: actualiza datos*/
  updateItem(id: any, item: any): Observable<Review>{
    return this.http /* se actualiza el item en formato JSON en la url dada */
      .put<Review>(this.base_url + '/' + id, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError))
  }
  /* delete */
  deleteItem(id: any): Observable<Review>{
    return this.http
      .delete<Review>(`${this.base_url}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError))
  }


}
