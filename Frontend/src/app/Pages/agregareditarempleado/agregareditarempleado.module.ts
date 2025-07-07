import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregareditarempleadoPageRoutingModule } from './agregareditarempleado-routing.module';

import { AgregareditarempleadoPage } from './agregareditarempleado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregareditarempleadoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AgregareditarempleadoPage]
})
export class AgregareditarempleadoPageModule {}
