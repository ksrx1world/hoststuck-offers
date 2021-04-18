import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { AddOffersComponent } from './add-offers/add-offers.component';
import { CompanyComponent } from './company/company.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    AddOffersComponent,
    CompanyComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NgbModule,
    ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
