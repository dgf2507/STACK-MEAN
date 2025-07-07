import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarinfraccionesPageRoutingModule } from './editarinfracciones-routing.module';

import { EditarinfraccionesPage } from './editarinfracciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarinfraccionesPageRoutingModule
  ],
  declarations: [EditarinfraccionesPage]
})
export class EditarinfraccionesPageModule {}
