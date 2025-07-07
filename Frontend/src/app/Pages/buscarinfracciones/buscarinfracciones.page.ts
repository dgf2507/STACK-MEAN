import { Component, OnInit } from '@angular/core';
import { InfraccionesService } from '../../Services/infracciones.service';
import { AlertController, ModalController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { Infracciones } from 'src/app/models/Infracciones';
import { PagosPage } from '../pagos/pagos.page';

@Component({
  selector: 'app-buscarinfracciones',
  templateUrl: './buscarinfracciones.page.html',
  styleUrls: ['./buscarinfracciones.page.scss'],
})
export class BuscarinfraccionesPage implements OnInit {
  infraccionesSearch: any = [];
  constructor(
    public infraccionesServices: InfraccionesService,
    public alertController: AlertController,
    private modalCtrl: ModalController
  ) {}

  infracccionAPagar: any = {
    PlacaVehicular: '',
    Sancion: '',
    Marca: '',
    TipoVehiculo: '',
    ModeloVehiculo: '',
    Ruta: '',
    ColorVehiculo: '',
    Pagado: false,
    Valor: 0,
  };
  ngOnInit() {}

  buscarInfraccion(form: NgForm) {
    this.infraccionesServices.buscarI(this.infracccionAPagar).subscribe(
      async (res) => {
        this.infraccionesSearch = res;
        // this.resetForm(form);
        console.log(this.infraccionesSearch);
      },
      async (err) => {
        const alert = await this.alertController.create({
          message:
            'No se encontraron infracciones para la placa vehicular ingresada!',
          buttons: ['Aceptar'],
        });
        await alert.present();
      }
    );
  }
  resetForm(form: NgForm) {
    if (form) {
      form.reset();
    }
  }
  pagarInfraccion(infraccion: Infracciones) {
    this.infraccionesServices.selectedInfraccion = infraccion;
  }
  async modalPagos() {
    const modal = await this.modalCtrl.create({
      component: PagosPage,
      componentProps: {},
    });
    await modal.present();
  }
}
