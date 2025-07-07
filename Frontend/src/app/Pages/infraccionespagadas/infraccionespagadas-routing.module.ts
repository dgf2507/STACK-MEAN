import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfraccionespagadasPage } from './infraccionespagadas.page';

const routes: Routes = [
  {
    path: '',
    component: InfraccionespagadasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfraccionespagadasPageRoutingModule {}
