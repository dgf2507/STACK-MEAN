import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPage } from './menu.page';
import { RolesGuard } from '../../Guards/roles.guard';
import { AdminGuard } from 'src/app/Guards/admin.guard';

import { AdminandSecretarioGuard } from 'src/app/Guards/adminand-secretario.guard';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'inicio',
        loadChildren: () =>
          import('../inicio/inicio.module').then((m) => m.InicioPageModule),
      },
      {
        path: 'employees',
        loadChildren: () =>
          import('../employees/employees.module').then(
            (m) => m.EmployeesPageModule
          ),
        canActivate: [AdminGuard],
      },

      {
        path: 'registroinfracciones',
        loadChildren: () =>
          import('../registroinfracciones/registroinfracciones.module').then(
            (m) => m.RegistroinfraccionesPageModule
          ),
        canActivate: [RolesGuard],
      },
      {
        path: 'agregareditarempleado',
        loadChildren: () =>
          import('../agregareditarempleado/agregareditarempleado.module').then(
            (m) => m.AgregareditarempleadoPageModule
          ),
        canActivate: [AdminGuard],
      },
      {
        path: 'editarinfracciones',
        loadChildren: () =>
          import('../editarinfracciones/editarinfracciones.module').then(
            (m) => m.EditarinfraccionesPageModule
          ),
        canActivate: [AdminandSecretarioGuard],
      },
      {
        path: 'infracciones',
        loadChildren: () =>
          import('../infracciones/infracciones.module').then(
            (m) => m.InfraccionesPageModule
          ),
      },
      {
        path: 'infraccionespagadas',
        loadChildren: () =>
          import('../infraccionespagadas/infraccionespagadas.module').then(
            (m) => m.InfraccionespagadasPageModule
          ),
        canActivate: [AdminandSecretarioGuard],
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
