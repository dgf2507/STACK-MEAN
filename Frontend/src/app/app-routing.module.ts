import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Guards/auth.guard';
import { NoauthGuard } from './Guards/noauth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'buscarinfracciones',
    pathMatch: 'full',
  },

  {
    path: 'buscarinfracciones',
    loadChildren: () =>
      import('./Pages//buscarinfracciones/buscarinfracciones.module').then(
        (m) => m.BuscarinfraccionesPageModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./Pages/login/login.module').then((m) => m.LoginPageModule),
    canActivate: [NoauthGuard],
  },

  {
    path: 'menu',
    loadChildren: () =>
      import('./Pages/menu/menu.module').then((m) => m.MenuPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'pagos',
    loadChildren: () =>
      import('./Pages/pagos/pagos.module').then((m) => m.PagosPageModule),
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
