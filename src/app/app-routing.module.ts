import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullLayout } from '../layouts/full-layout/full-layout.component';



const routes: Routes = [

  {path : "" , redirectTo : 'home' , pathMatch:'full'},

  {path:'' ,component: FullLayout,
children:[
  {path: 'banner' , loadChildren:''}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
