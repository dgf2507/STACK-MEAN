import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { InfraccionesService } from 'src/app/Services/infracciones.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-editarinfracciones',
  templateUrl: './editarinfracciones.page.html',
  styleUrls: ['./editarinfracciones.page.scss'],
})
export class EditarinfraccionesPage implements OnInit {
  constructor(
    public infraccionesServices: InfraccionesService,
    private modalCtrl: ModalController,
    public alertController: AlertController
  ) {}

  Ruta: any;

  sancion: any;
  valor: any;

  sanciones: any;

  tInfraccionSelected: any;

  ngOnInit() {
    this.getinfracciones();
    this.getTipoInfracciones();
    this.getRutas();
  }

  async editInfraccion(form: NgForm) {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: '¿Estás seguro de actualizar la infracción?',
      buttons: [
        {
          text: 'No',
        },
        {
          text: 'Si',
          handler: () => {
            if (form.value._id) {
              this.infraccionesServices
                .putInfraccion(form.value)
                .subscribe(async (res) => {
                  const alert = await this.alertController.create({
                    header: 'Aviso!',
                    message: 'Infracción actualizada exitosamente!',
                    buttons: ['Aceptar'],
                  });
                  await alert.present();
                  this.modalCtrl.dismiss();
                  this.resetForm(form);
                  this.getinfracciones();
                  this.getTipoInfracciones();
                });
            }
          },
        },
      ],
    });
    await alert.present();
  }
  getinfracciones() {
    this.infraccionesServices.getInfracciones().subscribe((res) => {
      this.infraccionesServices.infracciones = res;
    });
  }

  resetForm(form: NgForm) {
    if (form) {
      form.reset();
      this.infraccionesServices.selectedInfraccion;
    }
  }
  salirModalI() {
    this.modalCtrl.dismiss();
  }

  getRutas() {
    this.infraccionesServices.getRutas().subscribe((res) => {
      this.Ruta = res;
    });
  }

  getTipoInfracciones() {
    this.infraccionesServices.getTipoInfracciones().subscribe(
      (response) => {
        this.sanciones = response;
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
  setValue() {
    this.sancion = this.tInfraccionSelected.Sancion;
    this.valor = this.tInfraccionSelected.Valor;
  }
  customActionSheetOptions = {
    header: 'Seleccione una sanción:',
  };

}
