import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroinfraccionesPageRoutingModule } from './registroinfracciones-routing.module';

import { RegistroinfraccionesPage } from './registroinfracciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroinfraccionesPageRoutingModule
  ],
  declarations: [RegistroinfraccionesPage]
})
export class RegistroinfraccionesPageModule {}
