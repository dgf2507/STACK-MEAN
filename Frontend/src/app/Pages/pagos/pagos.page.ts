import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { InfraccionesService } from 'src/app/Services/infracciones.service';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AuthService } from '../../Services/auth.service';
declare var paypal;

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.page.html',
  styleUrls: ['./pagos.page.scss'],
})
export class PagosPage implements OnInit {
  constructor(
    public infraccionesServices: InfraccionesService,
    private modalCtrl: ModalController,
    public authService: AuthService
  ) {}
  ngOnInit() {
    this.paypal();
    this.getinfracciones();
  }
  async detallePago(form: NgForm) {
    if (form.value._id) {
      this.infraccionesServices
        .putInfraccion(form.value)
        .subscribe(async (res) => {
          if (this.authService.loggedIn() === true) {
            form.reset();
          }
          this.modalCtrl.dismiss();
          this.getinfracciones();
        });
    }
  }
  getinfracciones() {
    this.infraccionesServices.getInfracciones().subscribe((res) => {
      this.infraccionesServices.infracciones = res;
    });
  }
  paypal() {
    paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                reference_id:
                  this.infraccionesServices.selectedInfraccion.PlacaVehicular,
                description:
                  this.infraccionesServices.selectedInfraccion.Sancion,
                amount: {
                  currency_code: 'USD',
                  value: this.infraccionesServices.selectedInfraccion.Valor,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
          const element = document.getElementById('paypal-button-container');
          element.innerHTML =
            '<h2><ion-text color="dark"><B>Se ha realizado el pago exitosamente, gracias por usar nuestros servicios.</B></ion-text></h2>';
          this.infraccionesServices.selectedInfraccion.Pagado = true;
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render('#paypal-button-container');
  }
  resetForm(form: NgForm) {
    if (form) {
      form.reset();
      this.infraccionesServices.selectedInfraccion;
    }
  }
}
