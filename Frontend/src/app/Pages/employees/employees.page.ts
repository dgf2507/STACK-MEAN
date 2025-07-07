import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import { Employee } from 'src/app/models/Employees';
import { EmployeesService } from 'src/app/Services/employees.service';

import { AgregareditarempleadoPage } from '../agregareditarempleado/agregareditarempleado.page';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.page.html',
  styleUrls: ['./employees.page.scss'],
})
export class EmployeesPage implements OnInit {
  employeeForm: NgForm;
  employeeSearch: any = [];
  txtBuscar = '';

  constructor(
    public employeeService: EmployeesService,
    public http: HttpClient,
    private modalCtrl: ModalController,
    public alertController: AlertController
  ) {}

  ngOnInit() {
    this.getEmployees();
  }
  async modalEmployee() {
    const modal = await this.modalCtrl.create({
      component: AgregareditarempleadoPage,
      componentProps: {},
    });
    await modal.present();
  }
  getEmployees() {
    this.employeeService.getEmployees().subscribe((res) => {
      this.employeeService.employees = res;
    });
  }
  editEmployee(employee: Employee) {
    this.employeeService.selectedEmployee = employee;
  }
  async deleteEmployee(_id: string, form: NgForm) {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Estás seguro de eliminar al empleado?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
        },
        {
          text: 'Si',
          role: 'confirm',
          handler: () => {
            this.employeeService.deleteEmployee(_id).subscribe(async (res) => {
              const alert = await this.alertController.create({
                header: 'Aviso!',
                message: 'Empleado eliminado exitosamente!',
                buttons: ['OK'],
              });
              await alert.present();
              this.getEmployees();
              this.resetForm(form);
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
      this.employeeService.selectedEmployee;
    }
  }
  buscarEmployee(event) {
    this.employeeService.getEmployees().subscribe((res) => {
      this.employeeSearch = res;
    });
    this.txtBuscar = event.target.value;
  }
}
