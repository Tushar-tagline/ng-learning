import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { Card1Component } from './card1/card1.component';
import { Card2Component } from './card2/card2.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'card1', component: Card1Component
  },
  {
    path: 'card2', component: Card2Component
  },
  {
    path :'demomodel',loadChildren: () => import('./demomodel/demomodel.module').then(mod =>mod.DemomodelModule)
  }
 

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }