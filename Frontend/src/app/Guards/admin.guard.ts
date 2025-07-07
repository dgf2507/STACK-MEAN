import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AuthService } from '../Services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(
    public authService: AuthService,
    public alertController: AlertController
  ) {}
  async canActivate() {
    let Role = localStorage.getItem('Cargo');
    if (Role === ' Coordinador General ') {
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
