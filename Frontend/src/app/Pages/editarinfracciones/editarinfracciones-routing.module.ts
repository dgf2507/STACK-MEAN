import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarinfraccionesPage } from './editarinfracciones.page';

const routes: Routes = [
  {
    path: '',
    component: EditarinfraccionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarinfraccionesPageRoutingModule {}
