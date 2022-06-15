import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { CreatComponent } from './objectif/creat/creat.component';
import { ModifyComponent } from './objectif/modify/modify.component';
import { ConsulterComponent } from './objectif/consulter/consulter.component';

import{HttpClientModule }from '@angular/common/http';
import { ConsultCompteComponent } from './compte/consult-compte/consult-compte.component';

import { AddComponent } from './manage/add/add.component';
import { DetailsComponent } from './manage/details/details.component';
import { ConsultUsComponent } from './manage/consult-us/consult-us.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DashboardCompteComponent } from './dashboard-compte/dashboard-compte.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    CreatComponent,
    ModifyComponent,
    ConsulterComponent,
    ConsultCompteComponent,
    
    AddComponent,
    DetailsComponent,
    ConsultUsComponent,
    AdminDashboardComponent,
    DashboardCompteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
