import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregareditarempleadoPage } from './agregareditarempleado.page';

const routes: Routes = [
  {
    path: '',
    component: AgregareditarempleadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregareditarempleadoPageRoutingModule {}
