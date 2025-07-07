import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(
    public alertController: AlertController,
    public authService: AuthService,
    public navCtrl: NavController
  ) {}
  ngOnInit() {}

  async login() {
    this.authService.login(this.authService.employee).subscribe(
      (res) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('Cargo', res.cargo);
        localStorage.setItem('Nombre', res.nombre);
        localStorage.setItem('Apellido', res.apellido);
        this.navCtrl.navigateRoot(['/menu/inicio']);
      },
      async (err) => {
        const alert = await this.alertController.create({
          header: 'Error!',
          message: 'Los datos que ingresaste son incorrectos.',
          buttons: ['Aceptar'],
        });
        await alert.present();
      }
    );
  }
}
