import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Destination} from "../models/destination.model";
import {Review} from "../models/review.model";

@Injectable({
  providedIn: 'root'
})
export class DestinationDataService {
  baseUrl = "http://localhost:3000/destinations";

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  //http API Errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Default Error Handling
      console.log(
        `An error occurred ${error.status}, body was: ${error.error}`
      );
    } else {
      // Unsuccessful Response Error Code returned from Backend
      console.log(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
    // Return Observable with Error Message to Client
    return throwError(
      'Something happened with request, please try again later.'
    );
  }

  createItem(item: any): Observable<Destination> {
    return this.http
      .post<Destination>(this.baseUrl, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getList(): Observable<Destination> {
    return this.http
      .get<Destination>(this.baseUrl)
      .pipe(retry(2), catchError(this.handleError));
  }

  getItem(id: string): Observable<Destination> {
    return this.http
      .get<Destination>(this.baseUrl + '/' + id).pipe(retry(2),catchError(this.handleError));
  }

  getReviews(id: string): Observable<Review> {
    return this.http
      .get<Review>(this.baseUrl)
      .pipe(retry(2), catchError(this.handleError));
  }

  updateItem(id: string, item: any): Observable<Destination> {
    return this.http
      .put<Destination>(this.baseUrl + '/' + id, JSON.stringify(item),   this.httpOptions
      )
      .pipe(retry(2), catchError(this.handleError));
  }

  deleteItem(id: string): Observable<Destination> {
    return this.http
      .delete<Destination>(`${this.baseUrl}/${id}`, this.httpOptions )
      .pipe(retry(2), catchError(this.handleError));
  }

}
