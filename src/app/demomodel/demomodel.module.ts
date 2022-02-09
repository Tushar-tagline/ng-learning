import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemomodelRoutingModule } from './demomodel-routing.module';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    DemomodelRoutingModule
  ]
})
export class DemomodelModule { }
