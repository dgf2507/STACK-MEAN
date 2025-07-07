import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  AlertController,
  ModalController,
  NavController,
} from '@ionic/angular';
import { EmployeesService } from 'src/app/Services/employees.service';

@Component({
  selector: 'app-agregareditarempleado',
  templateUrl: './agregareditarempleado.page.html',
  styleUrls: ['./agregareditarempleado.page.scss'],
})
export class AgregareditarempleadoPage implements OnInit {
  constructor(
    public employeeService: EmployeesService,
    private modalCtrl: ModalController,
    public navCtrl: NavController,
    public alertController: AlertController
  ) {}
  roles: any;
  ngOnInit() {
    this.getEmployees();
    this.getRoles();
  }
  canDismiss = false;

  async addEmployee(form: NgForm) {
    if (form.value._id) {
      const alert = await this.alertController.create({
        header: 'Alerta!',
        message: '¿Estás seguro de editar  los datos del empleado?',
        buttons: [
          {
            text: 'No',
          },
          {
            text: 'Si',
            handler: () => {
              this.employeeService
                .putEmployee(form.value)
                .subscribe(async (res) => {
                  this.resetForm(form);
                  this.getEmployees();
                  const alert = await this.alertController.create({
                    header: 'Aviso!',
                    message: 'Empleado actializado exitosamente!',
                    buttons: ['OK'],
                  });
                  this.modalCtrl.dismiss();
                  await alert.present();
                });
            },
          },
        ],
      });
      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: 'Alerta!',
        message: '¿Estás seguro de agregar un nuevo empleado?',
        buttons: [
          {
            text: 'No',
          },
          {
            text: 'Si',
            handler: () => {
              this.employeeService.postEmployee(form.value).subscribe(
                async (res) => {
                  this.getEmployees();
                  this.resetForm(form);
                  const alert = await this.alertController.create({
                    header: 'Aviso!',
                    message: 'Empleado creado exitosamente!',
                    buttons: ['Aceptar'],
                  });
                  this.modalCtrl.dismiss();
                  await alert.present();
                },
                async (err) => {
                  const alert = await this.alertController.create({
                    header: 'Error!',
                    message:
                      'El correo que ingresaste ya se encuentra en uso, por favor ingresa otro correo.',

                    buttons: ['Aceptar'],
                  });
                  await alert.present();

                  return;
                }
              );
            },
          },
        ],
      });
      await alert.present();
    }
  }
  getEmployees() {
    this.employeeService.getEmployees().subscribe((res) => {
      this.employeeService.employees = res;
    });
  }
  resetForm(form: NgForm) {
    if (form) {
      form.reset();
      this.employeeService.selectedEmployee;
    }
  }
  salirModalE() {
    this.modalCtrl.dismiss();
  }
  getRoles() {
    this.employeeService.getRoles().subscribe((res) => {
      this.roles = res;
    });
  }
}
