import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomComponent } from './components/hom/hom.component'
const routes: Routes = [
  {path:'acc', loadChildren:'./modules/acc.module#accModule'},
  {path:'db', loadChildren:'./modules/db.module#dbModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
