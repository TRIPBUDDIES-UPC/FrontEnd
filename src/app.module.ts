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
import { FotterComponent } from './app/public/pages/fotter/fotter.component';
import { TravellerComponent } from './app/public/pages/sign-in/traveller/traveller.component';
import { DialogBoxComponent } from './app/public/pages/sign-in/dialog-box/dialog-box.component';
import { DialogBoxInvalidFormComponent } from './app/public/pages/sign-in/dialog-box-invalid-form/dialog-box-invalid-form.component';
import { BussinessComponent } from './app/public/pages/sign-in/bussiness/bussiness.component';
import { TravellersComponent } from './app/travellers/travellers.component';
import { BussinessesComponent } from './app/bussinesses/bussinesses.component';
import { HomeTravellerComponent } from './app/travellers/pages/home-traveller/home-traveller.component';
import { MessagesTravellerComponent } from './app/travellers/pages/messages-traveller/messages-traveller.component';
import { NotificationTravellerComponent } from './app/travellers/pages/notification-traveller/notification-traveller.component';
import { ProfileTravellerComponent } from './app/travellers/pages/profile-traveller/profile-traveller.component';
import { SettingsTravellerComponent } from './app/travellers/pages/settings-traveller/settings-traveller.component';
import { HomeCompanyComponent } from './app/bussinesses/pages/home-company/home-company.component';
import { PostPlaceComponent } from './app/bussinesses/pages/post-place/post-place.component';
import { MessagesBussinessComponent } from './app/bussinesses/pages/messages-bussiness/messages-bussiness.component';
import { NotificationsBussinessComponent } from './app/bussinesses/pages/notifications-bussiness/notifications-bussiness.component';
import { ProfileBussinessComponent } from './app/bussinesses/pages/profile-bussiness/profile-bussiness.component';
import { SettingsComponent } from './app/bussinesses/pages/settings/settings.component';
import {CdkFixedSizeVirtualScroll} from "@angular/cdk/scrolling";
import {MatRippleModule} from "@angular/material/core";
import { HeaderBusinessComponent } from './app/bussinesses/pages/header-business/header-business.component';
import {MatMenuModule} from '@angular/material/menu';
import { EditProfileComponent } from './app/bussinesses/pages/edit-profile/edit-profile.component';
import { PlacesComponent } from './app/bussinesses/pages/places/places.component';
import { AddPlacesComponent } from './app/bussinesses/pages/add-places/add-places.component';
import { EditPlacesComponent } from './app/bussinesses/pages/edit-places/edit-places.component';
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
    ProfileUsersComponent,
    FotterComponent,
    TravellerComponent,
    DialogBoxComponent,
    DialogBoxInvalidFormComponent,
    BussinessComponent,
    TravellersComponent,
    BussinessesComponent,
    HomeTravellerComponent,
    MessagesTravellerComponent,
    NotificationTravellerComponent,
    ProfileTravellerComponent,
    SettingsTravellerComponent,
    HomeCompanyComponent,
    PostPlaceComponent,
    MessagesBussinessComponent,
    NotificationsBussinessComponent,
    ProfileBussinessComponent,
    SettingsComponent,
    HeaderBusinessComponent,
    EditProfileComponent,
    PlacesComponent,
    AddPlacesComponent,
    EditPlacesComponent
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
    MatSidenavModule,
    CdkFixedSizeVirtualScroll,
    MatRippleModule,
    MatMenuModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
