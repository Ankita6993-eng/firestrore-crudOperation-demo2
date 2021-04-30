import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentDetailComponent} from './student-detail/student-detail.component'

const routes: Routes = [
  {
    path:'',component:StudentDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
