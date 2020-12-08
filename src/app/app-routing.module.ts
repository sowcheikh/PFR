import { CmComponent } from './cm/cm.component';
import { AdminComponent } from './admin/admin.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin', component: AdminComponent
    
  },
  {
    path: 'cm', component: CmComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
