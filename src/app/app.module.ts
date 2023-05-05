import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/vistaHome/home/home.component';
import { LoginComponent } from './Components/VistaLogin/sign-in/login/login.component';
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
import { MatRadioModule } from '@angular/material/radio';
import { FooterComponent } from './Components/footer/footer.component';
import { SignUpComponent } from './Components/VistaLogin/sign-up/sign-up.component';
import { NavbarComponent } from './Components/vistaHome/navbar/navbar.component';
import { ToolbarComponent } from './Components/VistaLogin/toolbar/toolbar.component';
import { CookieService } from 'ngx-cookie-service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,
    SignUpComponent,
    NavbarComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
    MatRadioModule,
    HttpClientModule,
    BrowserAnimationsModule    
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
