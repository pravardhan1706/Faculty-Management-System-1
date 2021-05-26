import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminHODRoutingModule } from './admin-hod-routing.module';
import { AdminHODComponent } from './admin-hod.component';


@NgModule({
  declarations: [
    AdminHODComponent
  ],
  imports: [
    CommonModule,
    AdminHODRoutingModule
  ]
})
export class AdminHODModule { }
