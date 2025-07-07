import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminandSecretarioGuard implements CanActivate {
  constructor(public alertController: AlertController) {}
  async canActivate() {
    let Role = localStorage.getItem('Cargo');
    if (Role === ' Coordinador General ' || Role === ' Secretario ') {
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
