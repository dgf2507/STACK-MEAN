import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroinfraccionesPage } from './registroinfracciones.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroinfraccionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroinfraccionesPageRoutingModule {}
