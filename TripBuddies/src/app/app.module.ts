import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignInComponent } from './security/pages/sign-in/sign-in.component';
import { SignUpComponent } from './security/pages/sign-up/sign-up.component';
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
import {MatExpansionModule} from '@angular/material/expansion';
import {ToastrModule} from 'ngx-toastr';
import { MatRadioModule } from '@angular/material/radio';
import { HometestComponent } from './security/hometest/hometest.component';
import { DestinationsTableComponent } from './destinations/destinations-table/destinations-table.component';
import { DestinationsReviewsComponent } from './destinations/destinations-reviews/destinations-reviews.component';
import { AddDestinationDialogComponent } from './destinations/add-destination-dialog/add-destination-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    HometestComponent,
    DestinationsTableComponent,
    DestinationsReviewsComponent,
    AddDestinationDialogComponent
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
    MatExpansionModule,
    ToastrModule.forRoot(),
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
