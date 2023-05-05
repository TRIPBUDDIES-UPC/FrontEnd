import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/VistaLogin/sign-in/login/login.component';
import { HomeComponent } from './Components/vistaHome/home/home.component';
import { SignUpComponent } from './Components/VistaLogin/sign-up/sign-up.component';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
{path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
