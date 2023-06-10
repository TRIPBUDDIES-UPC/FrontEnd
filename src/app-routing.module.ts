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

const routes: Routes = [
  {path:'', redirectTo: '/sign-in', pathMatch:"full"},
  {path:'', redirectTo: '/', pathMatch:"full"},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'sign-in', component: SignInComponent},
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
