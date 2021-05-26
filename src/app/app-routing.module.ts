import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{
  path:"login", component:LoginComponent
},
  { path: 'AdminHOD', loadChildren: () => import('./admin-hod/admin-hod.module').then(m => m.AdminHODModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
