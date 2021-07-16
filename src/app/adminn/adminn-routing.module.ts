import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminnComponent } from './adminn.component';
import { AttendedComponent } from './attended/attended.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { ConductedComponent } from './conducted/conducted.component';
import { ConferencesComponent } from './conferences/conferences.component';
import { FDPComponent } from './fdp/fdp.component';
import { GuestlecturesComponent } from './guestlectures/guestlectures.component';
import { SDPComponent } from './sdp/sdp.component';
import { SeminarsComponent } from './seminars/seminars.component';
import { WebinarComponent } from './webinar/webinar.component';
import { WorkhopsComponent } from './workhops/workhops.component';

const routes: Routes = [{ path: '', component: AdminnComponent },
{path:'conducted',component:ConductedComponent, children:[
  {path:'gl',component:GuestlecturesComponent},
  {path:'wk',component:WorkhopsComponent},
  {path:'wb',component:WebinarComponent},
  {path:'sm',component:SeminarsComponent},
  {path:'fp',component:FDPComponent},
  {path:'sp',component:SDPComponent},
  {path:'cf',component:CertificationsComponent},
  {path:'cs',component:ConferencesComponent},



]},
{path:'attended',component:AttendedComponent}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminnRoutingModule { }
