import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignUpComponent} from "./app/public/pages/sign-up/sign-up.component";
import {SignInComponent} from "./app/public/pages/sign-in/sign-in.component";
import {HomeUsersComponent} from "./app/users/home-users/home-users.component";
import {SearchListComponent} from "./app/users/search-list/search-list.component";
import {DestinationsTableComponent} from "./app/users/destinations/destination-table/destination-table.component";
import {DestinationsReviewsComponent} from "./app/users/destinations/destination-reviews/destination-reviews.component";
import {TravelListComponent} from "./app/users/travel-list/travel-list.component";
import {PageNotfoundComponent} from "./app/public/pages/page-notfound/page-notfound.component";
import {AcercaDeComponent} from "./app/users/acerca-de/acerca-de.component";
import {ProfileUsersComponent} from "./app/users/profile-users/profile-users.component";
import {TravellerComponent} from "./app/public/pages/sign-in/traveller/traveller.component";
import {BussinessComponent} from "./app/public/pages/sign-in/bussiness/bussiness.component";
import {TravellersComponent} from "./app/travellers/travellers.component";
import {HomeTravellerComponent} from "./app/travellers/pages/home-traveller/home-traveller.component";
import {MessagesTravellerComponent} from "./app/travellers/pages/messages-traveller/messages-traveller.component";
import {ProfileTravellerComponent} from "./app/travellers/pages/profile-traveller/profile-traveller.component";
import {SettingsTravellerComponent} from "./app/travellers/pages/settings-traveller/settings-traveller.component";
import {
  NotificationTravellerComponent
} from "./app/travellers/pages/notification-traveller/notification-traveller.component";
import {BussinessesComponent} from "./app/bussinesses/bussinesses.component";
import {HomeCompanyComponent} from "./app/bussinesses/pages/home-company/home-company.component";
import {MessagesBussinessComponent} from "./app/bussinesses/pages/messages-bussiness/messages-bussiness.component";
import {ProfileBussinessComponent} from "./app/bussinesses/pages/profile-bussiness/profile-bussiness.component";
import {SettingsComponent} from "./app/bussinesses/pages/settings/settings.component";
import {
  NotificationsBussinessComponent
} from "./app/bussinesses/pages/notifications-bussiness/notifications-bussiness.component";
import {B} from "@angular/cdk/keycodes";
import {EditProfileComponent} from "./app/bussinesses/pages/edit-profile/edit-profile.component";
import {PlacesComponent} from "./app/bussinesses/pages/places/places.component";

const routes: Routes = [
  {path:'', redirectTo: '/login', pathMatch:"full"},
  {path:'', redirectTo: '/', pathMatch:"full"},
  {path:'login', component: SignUpComponent},
  {path: 'sign-up', component: SignInComponent, children: [
      {path:'traveller', component: TravellerComponent},
      {path:'bussiness', component: BussinessComponent}
    ]
  },
  {
    path: 'travellers', component: TravellersComponent, children: [
         { path: 'home', component: HomeTravellerComponent },
         { path: 'messages', component: MessagesTravellerComponent },
         { path: 'profile', component: ProfileTravellerComponent },
         { path: 'settings', component: SettingsTravellerComponent },
         {path: 'notifications', component: NotificationTravellerComponent},
      ],
  },
  {
    path: 'bussiness', component: BussinessesComponent, children: [
      { path: 'home/:id', component: HomeCompanyComponent },
      { path: 'messages/:id', component: MessagesBussinessComponent },
      { path: 'profile/:id', component: ProfileBussinessComponent },
      { path: 'profile/editProfile/:id', component: EditProfileComponent },
      { path: 'settings/:id', component: SettingsComponent },
      {path: 'notifications/:id', component: NotificationsBussinessComponent},
      {path: 'places/:id', component: PlacesComponent},
    ],
  },

  {path: 'home/:id', component: HomeUsersComponent},
  {path: 'search/:id', component: SearchListComponent},
  {path: 'travel-list/:id' ,component: TravelListComponent},
  {path: 'destinations/:id', component: DestinationsTableComponent},
  {path: 'destinations/:id/reviews', component: DestinationsReviewsComponent},
  {path: 'acerca-de/:id', component: AcercaDeComponent},
  {path: 'profile/:id', component: ProfileUsersComponent},
  { path: '**', component: PageNotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
