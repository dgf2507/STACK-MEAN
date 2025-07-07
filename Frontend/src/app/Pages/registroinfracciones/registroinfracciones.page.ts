import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { InfraccionesService } from '../../Services/infracciones.service';

@Component({
  selector: 'app-registroinfracciones',
  templateUrl: './registroinfracciones.page.html',
  styleUrls: ['./registroinfracciones.page.scss'],
})
export class RegistroinfraccionesPage implements OnInit {
  constructor(
    public infraccionesServices: InfraccionesService,
    public alertController: AlertController,
    public http: HttpClient,
    public navCtrl: NavController
  ) {}
  form: NgForm;
  Ruta: any;
  pagado = false;
  sancion: any;
  valor: any;
  sanciones: any;
  tInfraccionSelected: any;

  ngOnInit(): void {
    this.getTipoInfracciones();
    this.getRutas();
    this.getinfracciones();
  }

  getinfracciones() {
    this.infraccionesServices.getInfracciones().subscribe((res) => {
      this.infraccionesServices.infracciones = res;
    });
  }
  async addInfraccion(form: NgForm) {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: '¿Estás seguro de generar la infracción?',
      buttons: [
        {
          text: 'No',
          handler: () => {},
        },
        {
          text: 'Si',
          handler: () => {
            this.infraccionesServices
              .CreateInfraccion(form.value)
              .subscribe(async (res) => {
                const alert = await this.alertController.create({
                  message: 'Infracción registrada exitosamente!',
                  buttons: ['OK'],
                });
                await alert.present();
                form.resetForm();
              });
          },
        },
      ],
    });
    await alert.present();
  }
  resetForm(form: NgForm) {
    if (form) {
      form.reset();
    }
  }
  getRutas() {
    this.infraccionesServices.getRutas().subscribe((res) => {
      this.Ruta = res;
    });
  }
  getTipoInfracciones() {
    this.infraccionesServices.getTipoInfracciones().subscribe(
      (res) => {
        this.sanciones = res;
        this.resetForm(this.form);
      },
      (error) => {
        console.log('error', error);
      }
    );
  }

  setValue() {
    this.sancion = this.tInfraccionSelected.Sancion;
    this.valor = this.tInfraccionSelected.Valor;
    this.pagado = this.infraccionesServices.selectedInfraccion.Pagado;
  }
}
