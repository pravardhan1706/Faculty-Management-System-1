import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHODComponent } from './admin-hod.component';

const routes: Routes = [{ path: '', component: AdminHODComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminHODRoutingModule { }
