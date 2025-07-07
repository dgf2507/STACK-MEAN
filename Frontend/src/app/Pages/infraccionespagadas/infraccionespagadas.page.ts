import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import { InfraccionesService } from 'src/app/Services/infracciones.service';
import { Infracciones } from 'src/app/models/Infracciones';
import { EditarinfraccionesPage } from '../editarinfracciones/editarinfracciones.page';
import { AuthService } from '../../Services/auth.service';
import { PagosPage } from '../pagos/pagos.page';

@Component({
  selector: 'app-infraccionespagadas',
  templateUrl: './infraccionespagadas.page.html',
  styleUrls: ['./infraccionespagadas.page.scss'],
})
export class InfraccionespagadasPage implements OnInit {
  infraccionesForm: NgForm;
  infraccionesSearch: any = [];
  txtBuscar = '';

  constructor(
    public infraccionesServices: InfraccionesService,
    private modalCtrl: ModalController,
    public alertController: AlertController,
    public authService: AuthService
  ) {}
  ngOnInit() {
    this.getinfracciones();
  }
  async modalInfraccion() {
    const modal = await this.modalCtrl.create({
      component: EditarinfraccionesPage,
      componentProps: {},
    });
    await modal.present();
  }

  getinfracciones() {
    this.infraccionesServices.getInfracciones().subscribe((res) => {
      this.infraccionesServices.infracciones = res;
    });
  }

  pagarInfraccion(infraccion: Infracciones) {
    this.infraccionesServices.selectedInfraccion = infraccion;
  }

  async deleteInfracccion(_id: string, form: NgForm) {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: '¿Estás  seguro de eliminar la infraccion?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {},
        },
        {
          text: 'Si',
          role: 'confirm',
          handler: () => {
            this.infraccionesServices
              .deleteInfraccion(_id)
              .subscribe(async (res) => {
                const alert = await this.alertController.create({
                  header: 'Aviso!',
                  message: 'Infracción eliminada exitosamente!',
                  buttons: ['OK'],
                });
                await alert.present();
                this.getinfracciones();
                this.resetForm(form);
              });
          },
        },
      ],
    });

    await alert.present();
  }
  editInfracccion(infracccion: Infracciones) {
    this.infraccionesServices.selectedInfraccion = infracccion;
  }
  resetForm(form: NgForm) {
    if (form) {
      form.reset();
      this.infraccionesServices.selectedInfraccion;
    }
  }

  addInfraccion(form: NgForm) {
    if (form.value._id) {
      this.infraccionesServices.putInfraccion(form.value).subscribe((res) => {
        this.resetForm(form);
        this.getinfracciones();
      });
    } else {
      this.infraccionesServices
        .CreateInfraccion(form.value)
        .subscribe((res) => {
          this.getinfracciones();
          form.resetForm();
        });
    }
  }
  buscarInfraccion(event) {
    this.infraccionesServices.getInfracciones().subscribe((res) => {
      this.infraccionesSearch = res;
    });
    this.txtBuscar = event.target.value;
  }
}
