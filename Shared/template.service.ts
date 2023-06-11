import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {SecuModel} from "../src/app/public/model/model";
import {map} from "rxjs/operators";
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TemplateService<T> {

  basePath = ' https://tripbuddies-api.herokuapp.com';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log(`An error occurred: ${error.error.message}`);
    } else {
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError(() => new Error('Something happened with request, please try again later'));
  }

  login(email: string, password: string): Observable<SecuModel | undefined> {
    return this.http.get<SecuModel[]>(`${this.basePath}?email=${email}&password=${password}`)
      .pipe(
        map(users => users.length > 0 ? users[0] : undefined)
      );
  }
  create(item: any): Observable<T> {
    return this.http.post<T>(
      this.basePath,
      JSON.stringify(item),
      this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  getById(id: any): Observable<T> {
    return this.http.get<T>(
      `${this.basePath}/${id}`,
      this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
  getCurrentUser(userId: string): Observable<any> {
    return this.http.get<any>(`${this.basePath}`)
      .pipe(
        catchError(this.handleError),
        // Encontrar el usuario con el ID correspondiente
        map((users: any[]) => users.find(user => user.id === userId))
      );
  }

  getAll(): Observable<T> {
    return this.http.get<T>(this.basePath, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  delete(id: any) {
    return this.http.delete(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  update(id: any, item: any): Observable<T> {
    return this.http.put<T>(`${this.basePath}/${id}`,
      JSON.stringify(item), this.httpOptions)
      .pipe(retry(3), catchError(this.handleError));
  }
}
