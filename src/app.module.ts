import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignInComponent } from './app/public/pages/sign-in/sign-in.component';
import { SignUpComponent } from './app/public/pages/sign-up/sign-up.component';
import {MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSortModule} from "@angular/material/sort";
import {MatIconModule} from "@angular/material/icon";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatDialogModule} from "@angular/material/dialog";
import {ToastrModule} from 'ngx-toastr';
import { MatRadioModule } from '@angular/material/radio';
import { HomeUsersComponent } from './app/users/home-users/home-users.component';
import { SearchListComponent } from './app/users/search-list/search-list.component';
import { DestinationsReviewsComponent } from './app/users/destinations/destination-reviews/destination-reviews.component';
import { DestinationsTableComponent } from './app/users/destinations/destination-table/destination-table.component';
import { MatExpansionModule } from '@angular/material/expansion';
import {AddDestinationDialogComponent} from "./app/users/destinations/add-destination-dialog/add-destination-dialog.component";
import { TravelListComponent } from './app/users/travel-list/travel-list.component';
import { PageNotfoundComponent } from './app/public/pages/page-notfound/page-notfound.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { AcercaDeComponent } from './app/users/acerca-de/acerca-de.component';
import { HeaderUsersComponent } from './app/users/header-users/header-users.component';
import {HeaderComponent} from "./app/public/pages/header/header.component";
import {MatSelectModule} from '@angular/material/select';
import { ProfileUsersComponent } from './app/users/profile-users/profile-users.component';
import {MatSidenavModule} from "@angular/material/sidenav";

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    HomeUsersComponent,
    SearchListComponent,
    DestinationsReviewsComponent,
    DestinationsTableComponent,
    AddDestinationDialogComponent,
    TravelListComponent,
    PageNotfoundComponent,
    AcercaDeComponent,
    HeaderUsersComponent,
    HeaderComponent,
    ProfileUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatSortModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
    MatSlideToggleModule,
    FormsModule,
    MatSlideToggleModule,
    MatDialogModule,
    ToastrModule.forRoot(),
    MatRadioModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
