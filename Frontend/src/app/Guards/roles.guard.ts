import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Services/auth.service';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class RolesGuard implements CanActivate {
  constructor(
    public authService: AuthService,
    public alertController: AlertController
  ) {}
  async canActivate() {
    let Role = localStorage.getItem('Cargo');
    if (
      Role === ' Coordinador General ' ||
      Role === ' Secretario ' ||
      Role === ' Controlador de Trafico '
    ) {
      return true;
    }
    const alert = await this.alertController.create({
      header: 'Error!',
      message: 'Solo personal autorizado!',
      buttons: ['Aceptar'],
    });
    await alert.present();
    return false;
  }
}
