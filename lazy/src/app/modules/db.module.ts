import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomComponent } from '../components/db/hom/hom.component';
import { RepComponent } from '../components/db/rep/rep.component';
import { Routes, RouterModule} from '@angular/router';
import { SharedModule } from './shared.module';
const routes:Routes=[
  {path:'hom', component:HomComponent},
  {path:'rep', component:RepComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [HomComponent, RepComponent]
})
export class DbModule { }
