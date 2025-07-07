import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfraccionesPageRoutingModule } from './infracciones-routing.module';

import { InfraccionesPage } from './infracciones.page';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfraccionesPageRoutingModule,
    PipesModule,
  ],
  declarations: [InfraccionesPage],
})
export class InfraccionesPageModule {}
