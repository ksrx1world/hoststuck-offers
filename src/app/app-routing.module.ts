import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddOffersComponent } from './add-offers/add-offers.component';
import { CompanyComponent } from './company/company.component';

const routes:Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'addoffers', component: AddOffersComponent},
  {path: 'company', component: CompanyComponent},
  {path: '**', component: HomeComponent }

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ]    
})
export class AppRoutingModule { }
