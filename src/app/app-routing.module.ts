import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ConsultCompteComponent } from './compte/consult-compte/consult-compte.component';
import { DashboardCompteComponent } from './dashboard-compte/dashboard-compte.component';
import { LoginComponent } from './login/login.component';
import { AddComponent } from './manage/add/add.component';
import { ConsultUsComponent } from './manage/consult-us/consult-us.component';
import { DetailsComponent } from './manage/details/details.component';

import { ConsulterComponent } from './objectif/consulter/consulter.component';
import { CreatComponent } from './objectif/creat/creat.component';
import { ModifyComponent } from './objectif/modify/modify.component';

const routes: Routes = [
  {path:'' ,component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'compte',component:ConsultCompteComponent},
  {path:'creatObjectif',component:CreatComponent},
  {path:'consultObjectif',component:ConsulterComponent},
  {path:'modifyObjectif/:id',component:ModifyComponent},
  {path:'users',component:ConsultUsComponent},
  {path:'ajouter',component:AddComponent},
  {path:'dashboardUser',component:DashboardCompteComponent},
  {path:'details/:id',component:DetailsComponent},
  {path:'compte',component:ConsultCompteComponent},
  {path:'adminDashboard',component:AdminDashboardComponent}//baad n3adi compte bel id mta3a f path {path:'compte:/id',component:}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


