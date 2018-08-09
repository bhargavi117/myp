import { Component } from '@angular/core';
import {Router, Routes} from '@angular/router';
import { AccModule } from './modules/acc.module';
import { Button } from '../../node_modules/protractor';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lazy';

  constructor(
    private router:Router
  ){}
   openAcc(){
    this.router.navigateByUrl('./components/acc/login/login.component')
  }
  openDb(){
    this.router.navigateByUrl('./components/db/hom')
  }
  
}
