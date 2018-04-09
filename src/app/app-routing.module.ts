import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { LoginComponent } from "./login/login.component";
import { AdminComponent } from "./admin/admin.component";
import { FinanceComponent } from "./finance/finance.component";

const routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login' , component: LoginComponent},
  { path: 'admin' , component: AdminComponent},
  { path: 'finance' , component: FinanceComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
