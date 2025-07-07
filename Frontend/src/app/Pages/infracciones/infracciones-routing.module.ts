import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfraccionesPage } from './infracciones.page';

const routes: Routes = [
  {
    path: '',
    component: InfraccionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfraccionesPageRoutingModule {}
