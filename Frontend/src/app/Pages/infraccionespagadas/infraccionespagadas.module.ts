import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../../pipes/pipes.module';
import { InfraccionespagadasPageRoutingModule } from './infraccionespagadas-routing.module';

import { InfraccionespagadasPage } from './infraccionespagadas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfraccionespagadasPageRoutingModule,
    PipesModule,
  ],
  declarations: [InfraccionespagadasPage],
})
export class InfraccionespagadasPageModule {}
