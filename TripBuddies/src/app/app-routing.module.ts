import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignUpComponent} from "./security/pages/sign-up/sign-up.component";
import {SignInComponent} from "./security/pages/sign-in/sign-in.component";
import {HometestComponent} from "./security/hometest/hometest.component";
import {DestinationsTableComponent} from "./destinations/destinations-table/destinations-table.component";
import {DestinationsReviewsComponent} from "./destinations/destinations-reviews/destinations-reviews.component";

const routes: Routes = [
  {path:'', redirectTo: '/sign-up', pathMatch:"full"},
  {path:'', redirectTo: '/', pathMatch:"full"},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'home/:id', component: HometestComponent},
  {path: 'destinations', component: DestinationsTableComponent},
  {path: 'destinations/:id', component: DestinationsReviewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
