import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [{
  path:"login", component:LoginComponent
},
{
  path:"register", component:RegisterComponent

},
  { path: 'AdminHOD', loadChildren: () => import('./admin-hod/admin-hod.module').then(m => m.AdminHODModule) },
  { path: 'adminn', loadChildren: () => import('./adminn/adminn.module').then(m => m.AdminnModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
