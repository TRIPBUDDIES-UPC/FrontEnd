import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TemplateService} from "../../../Shared/template.service";
import {SecuModel} from "../model/model";
import {Observable, of, switchMap} from "rxjs";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SecurityService extends TemplateService<SecuModel>{
  constructor(http: HttpClient) {
    super(http)
    this.basePath ='https://tripbuddies-api.herokuapp.com/users'
  }

}
