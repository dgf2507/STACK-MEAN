import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscarinfraccionesPage } from './buscarinfracciones.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarinfraccionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscarinfraccionesPageRoutingModule {}
