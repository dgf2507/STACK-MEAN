import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarinfraccionesPageRoutingModule } from './buscarinfracciones-routing.module';

import { BuscarinfraccionesPage } from './buscarinfracciones.page';
import { PipesModule } from '../../pipes/pipes.module';
import { PagosPageModule } from '../pagos/pagos.module';

@NgModule({
  declarations: [BuscarinfraccionesPage],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    BuscarinfraccionesPageRoutingModule,
    PipesModule,
    PagosPageModule,
  ],
})
export class BuscarinfraccionesPageModule {}
