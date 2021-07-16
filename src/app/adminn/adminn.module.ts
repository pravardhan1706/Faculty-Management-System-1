import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from'@angular/forms';
import { AdminnRoutingModule } from './adminn-routing.module';
import { AdminnComponent } from './adminn.component';
import { ConductedComponent } from './conducted/conducted.component';
import { AttendedComponent } from './attended/attended.component';
import { GuestlecturesComponent } from './guestlectures/guestlectures.component';
import { WorkhopsComponent } from './workhops/workhops.component';
import { WebinarComponent } from './webinar/webinar.component';
import { SeminarsComponent } from './seminars/seminars.component';
import { FDPComponent } from './fdp/fdp.component';
import { SDPComponent } from './sdp/sdp.component';
import { ConferencesComponent } from './conferences/conferences.component';
import { CertificationsComponent } from './certifications/certifications.component';


@NgModule({
  declarations: [
    AdminnComponent,
    ConductedComponent,
    AttendedComponent,
    GuestlecturesComponent,
    WorkhopsComponent,
    WebinarComponent,
    SeminarsComponent,
    FDPComponent,
    SDPComponent,
    ConferencesComponent,
    CertificationsComponent
  ],
  imports: [
    CommonModule,
    AdminnRoutingModule,
    FormsModule
  ]
})
export class AdminnModule { }
