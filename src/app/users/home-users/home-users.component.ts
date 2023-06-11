import {Component, OnInit} from '@angular/core';
import {SecuModel} from "../../public/model/model";
import {SecurityService} from "../../public/service/security.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home-users',
  templateUrl: './home-users.component.html',
  styleUrls: ['./home-users.component.css']
})
export class HomeUsersComponent implements OnInit{
  title: String | any;
  id: any;
  UserData: SecuModel;

  constructor(private userService: SecurityService, private route: ActivatedRoute) {
    this.UserData = {} as SecuModel;

  }
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get("id"));
  }

}
