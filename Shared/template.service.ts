import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {SecuModel} from "../src/app/public/model/model";
import {map} from "rxjs/operators";
import {BussinessModel} from "../src/app/public/model/BussinessModel";
import {TravellerModel} from "../src/app/public/model/TravellerModel";

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  basePath = 'https://tripbuddieswebservice-production.up.railway.app/users';
  urlBussiness = "https://tripbuddieswebservice-production.up.railway.app/businesses"
  urlTraveller = "https://tripbuddieswebservice-production.up.railway.app/travellers"
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
  create(item: any): Observable<any> {
    return this.http.post(
      this.basePath,
      JSON.stringify(item),
      this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  getById(id: any): Observable<object> {
    return this.http.get(
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

  getAll(): Observable<object> {
    return this.http.get(this.basePath, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  getAllUser(): Observable<object> {
    return this.http
      .get<object>(this.basePath, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  delete(id: any) {
    return this.http.delete(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  update(id: any, item: any): Observable<any> {
    return this.http.put(`${this.basePath}/${id}`,
      JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  getAllTravellerProfile(id: number): Observable<object> {
    return this.http.get(`${this.basePath}/traveller`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  postBussiness(company: BussinessModel): Observable<BussinessModel> {
    return this.http
      .post<BussinessModel>(`${this.urlBussiness}`, company, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  getBussinessAll(): Observable<BussinessModel> {
    return this.http
      .get<BussinessModel>(`${this.urlBussiness}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  postTraveller(traveller: TravellerModel): Observable<TravellerModel> {
    return this.http
      .post<TravellerModel>(`${this.urlTraveller}`, traveller, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  getTravellerAll(): Observable<any> {
    return this.http
      .get<TravellerModel>(`${this.urlTraveller}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  getUserByEmail(email: string): Observable<object> {
    return this.http
      .get<object>(`${this.basePath}/searchByEmail/${email}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  getUserById(id: number): Observable<object> {
    return this.http
      .get<object>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}
