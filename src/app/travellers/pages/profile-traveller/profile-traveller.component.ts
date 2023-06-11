import {Component, ViewChild} from '@angular/core';
import {delay} from "rxjs";
import {toInteger} from "lodash";
import {BreakpointObserver} from "@angular/cdk/layout";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {TravellerModel} from "../../../public/model/TravellerModel";
import {TravellersService} from "../../services/TravellersService";

@Component({
  selector: 'app-profile-traveller',
  templateUrl: './profile-traveller.component.html',
  styleUrls: ['./profile-traveller.component.css']
})
export class ProfileTravellerComponent {
  @ViewChild(MatGridList)
  gridList!: MatGridList;

  @ViewChild('first')
  firstGridTile!: MatGridTile;

  @ViewChild('second')
  secondGridTile!: MatGridTile;

  socialNetworks: Array<any> = [];
  facebook : string = "none";
  twitter : string = "none";
  instagram : string = "none";

  traveller!: TravellerModel;

  constructor(
    private observer: BreakpointObserver,
    private service: TravellersService
  ) {}

  ngOnInit(): void {

    //getting id from localStorage
    const travellerId = toInteger(localStorage.getItem("id"));

    this.getTraveller(travellerId);
    this.ngAfterViewInit();
    this.getSocialNetworks(travellerId);
  }


  getTraveller(id: number) {
    this.service.GetTrallById(id).subscribe((response: any) => {
      this.traveller = response;
      console.log(this.traveller);
    });
  }




  getSocialNetworks(id: number) {
    this.service.GetSocialNetworkByUserId(id).subscribe((response: any) => {
      this.socialNetworks = response;

      let i;
      for(i = 0; i < this.socialNetworks.length; i++){
        if(this.socialNetworks[i].nameSocialNetwork == "Facebook"){
          this.facebook = this.socialNetworks[i].urlSocialNetwork;
        }
        if(this.socialNetworks[i].nameSocialNetwork == "Twitter"){
          this.twitter = this.socialNetworks[i].urlSocialNetwork;
        }
        if(this.socialNetworks[i].nameSocialNetwork == "Instagram"){
          this.instagram = this.socialNetworks[i].urlSocialNetwork;
        }
      }
    });
  }



  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 1215px)'])
      .pipe(delay(1))
      .subscribe((res: any) => {
        if (res.matches) {
          //responsive
          this.gridList.rowHeight = '95vh';

          this.firstGridTile.colspan = 4;
          this.secondGridTile.colspan = 4;

          this.firstGridTile.rowspan = 1;
          this.secondGridTile.rowspan = 3;

        } else {
          //full -width
          this.gridList.rowHeight = '88vh';

          this.firstGridTile.colspan = 1;
          this.secondGridTile.colspan = 3;

          this.firstGridTile.rowspan = 1;
          this.secondGridTile.rowspan = 1;

        }
      });
  }
}
