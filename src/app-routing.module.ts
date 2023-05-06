import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignUpComponent} from "./app/security/pages/sign-up/sign-up.component";
import {SignInComponent} from "./app/security/pages/sign-in/sign-in.component";
import {HomeUsersComponent} from "./app//home-users/home-users.component";
import {HometestComponent} from "./app/security/hometest/hometest.component";
import {SearchListComponent} from "./app/search-list/search-list.component";
import {DestinationsTableComponent} from "./app/destinations/destination-table/destination-table.component";
import {DestinationsReviewsComponent} from "./app/destinations/destination-reviews/destination-reviews.component";
import {TravelListComponent} from "./app/travel-list/travel-list.component";

const routes: Routes = [
  {path:'', redirectTo: '/sign-up', pathMatch:"full"},
  {path:'', redirectTo: '/', pathMatch:"full"},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'home/:id', component: HomeUsersComponent},
  {path: 'search/:id', component: SearchListComponent},
  {path: 'travel-list/:id' ,component: TravelListComponent},
  {path: 'destinations/:id', component: DestinationsTableComponent},
  {path: 'destinations/:id/reviews', component: DestinationsReviewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
