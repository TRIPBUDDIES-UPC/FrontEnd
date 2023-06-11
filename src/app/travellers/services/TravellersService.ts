import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import {Injectable} from "@angular/core";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {TravellerModel} from "../../public/model/TravellerModel";

@Injectable({
  providedIn: 'root',
})
export class TravellersService{
  BaseURL: string = 'https://tripbuddieswebservice-production.up.railway.app/api/v1/travellers';
  socialNetworks = 'https://tripbuddieswebservice-production.up.railway.app/api/v1/socialNetworks';
  PostURL: string = 'https://tripbuddieswebservice-production.up.railway.app/api/v1/posts';

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
  GetAllTralls(): Observable<TravellerModel> {
    return this.http
      .get<TravellerModel>(this.BaseURL, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  GetTrallById(id: number): Observable<TravellerModel> {
    return this.http
      .get<TravellerModel>(`${this.BaseURL}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  updateTrallv(dev: TravellerModel): Observable<TravellerModel> {
    return this.http
      .put<TravellerModel>(`${this.BaseURL}/${dev.id}`, JSON.stringify(dev), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  GetSocialNetworkByUserId(id: number): Observable<object> {
    return this.http
      .get<object>(this.socialNetworks + '/user/' + id, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  GetContacts(UserId:number): Observable<object> {
    return this.http
      .get<object>(`https://tripbuddieswebservice-production.up.railway.app/v1/users/${UserId}/messages/LastMessageDeveloper`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  GetMessages(contactId: number, UserId:number): Observable<object> {
    return this.http
      .get(`https://tripbuddieswebservice-production.up.railway.app/api/v1/users/${UserId}/messages/${contactId}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  SendMessage(answer: object, contactId: number, UserId:number): Observable<object> {
    return this.http
      .post<object>(`https://tripbuddieswebservice-production.up.railway.app/api/v1/users/${UserId}/messages/${contactId}`, answer, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }


  GetNotificationsByUserId(id:number, UserId:number): Observable<object> {
    return this.http
      .get(`https://tripbuddieswebservice-production.up.railway.app/api/v1/users/${UserId}/notifications/${id}`, this.httpOptions)
      .pipe(retry(2),catchError(this.handleError));
  }
  GetAllNotifications(UserId:number): Observable<object> {
    return this.http
      .get(`https://tripbuddieswebservice-production.up.railway.app/api/v1/users/${UserId}/notifications`, this.httpOptions)
      .pipe(retry(2),catchError(this.handleError));
  }

  SendNotification(notification: object, UserId:number): Observable<object> {
    return this.http
      .post<object>(`https://tripbuddieswebservice-production.up.railway.app/api/v1/users/${UserId}/notifications`, JSON.stringify(notification) , this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }


  DeleteNotificationById(id: number, UserId: number): Observable<object> {
    return this.http
      .delete(`https://tripbuddieswebservice-production.up.railway.app/api/v1/users/${UserId}/notifications/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}
