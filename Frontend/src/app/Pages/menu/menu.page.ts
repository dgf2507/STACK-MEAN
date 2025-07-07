import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  indiceSeleccionado: number = 0;
  indiceSeleccionado2: number = 0;

  paginas = [
    {
      titulo: 'Inicio',
      url: '/menu/inicio',
      icono: 'home',
    },
    {
      titulo: 'Registrar Infracciones',
      url: '/menu/registroinfracciones',
      icono: 'create',
    },

    {
      titulo: 'Empleados',
      url: '/menu/employees',
      icono: 'people',
    },
  ];
  infraccionesPages = [
    {
      titulo: 'No pagadas',
      url: '/menu/infracciones',
      icono: 'alert-circle',
    },
    {
      titulo: 'Pagadas',
      url: '/menu/infraccionespagadas',
      icono: 'bag-check',
    },
  ];
  constructor(
    public alertController: AlertController,
    public navCtrl: NavController,
    public authService: AuthService
  ) {}

  ngOnInit() {}
  cambiarIndiceSeleccionado(i: number) {
    this.indiceSeleccionado = i;
  }

  async salir() {
    const alert = await this.alertController.create({
      header: 'Salir',
      message: '¿Desea cerrar sesion?',
      buttons: [
        {
          text: 'No',
          handler: () => {},
        },
        {
          text: 'Si',
          handler: () => {
            this.authService.logOut();
            localStorage.removeItem('ingresado');
            this.navCtrl.navigateRoot('buscarinfracciones');
          },
        },
      ],
    });

    await alert.present();
  }
}
