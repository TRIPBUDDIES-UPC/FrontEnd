import { Injectable } from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import { tap } from "rxjs/operators";
import { ApiService } from "./api.service";
import {SecuModel} from "../model/model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();
  currentID = 0;
  currentName = "";
  public _isTraveler$ = new BehaviorSubject<boolean>(false);
  isTraveler$ = this._isTraveler$.asObservable();
  public _isBuyer$ = new BehaviorSubject<boolean>(false);
  isBuyer$ = this._isBuyer$.asObservable();
  private http: any;

  constructor(private apiService: ApiService) {
    const token = localStorage.getItem('TripBuddies_auth');
    this._isLoggedIn$.next(!!token);
  }

  login(email: String, password: string) {
    //this.currentDni = dni;
    return this.apiService.login(email, password).pipe(
      tap((response: any) => {
        this._isLoggedIn$.next(true);
        localStorage.setItem('TripBuddies_auth', response.token);

      })
    );
  }
}
