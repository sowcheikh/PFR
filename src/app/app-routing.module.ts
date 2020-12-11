import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CmComponent } from './cm/cm.component';
import { AdminComponent } from './admin/admin.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: LoginComponent
    
  },
  {
    path: 'admin', component: AdminComponent
    
  },
  {
    path: 'cm', component: CmComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
