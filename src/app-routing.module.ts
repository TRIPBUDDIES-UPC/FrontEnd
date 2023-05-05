import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignUpComponent} from "./app/security/pages/sign-up/sign-up.component";
import {SignInComponent} from "./app/security/pages/sign-in/sign-in.component";
import {HomeUsersComponent} from "./app//home-users/home-users.component";
import {HometestComponent} from "./app/security/hometest/hometest.component";
import {SearchListComponent} from "./app/search-list/search-list.component";

const routes: Routes = [
  {path:'', redirectTo: '/sign-up', pathMatch:"full"},
  {path:'', redirectTo: '/', pathMatch:"full"},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'home/:id', component: HomeUsersComponent},
  {path: 'search/:id', component: HometestComponent},
  {path: 'travel-list/:id' ,component: SearchListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
