import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../components/acc/login/login.component';
import { RegComponent } from '../components/acc/reg/reg.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from './shared.module';
const routes:Routes=[
  {path:'login',component:LoginComponent},
  {path:'reg',component:RegComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [LoginComponent, RegComponent]
})
export class AccModule { }
