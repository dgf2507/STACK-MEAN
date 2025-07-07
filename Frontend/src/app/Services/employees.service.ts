import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/Employees';
@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  selectedEmployee: Employee = {
    Nombre: '',
    Apellido: '',
    Telefono: '',
    Direccion: '',
    Cedula: '',
    Correo: '',
    Contrasena: '',
    Cargo: '',
  };

  employees: Employee[];

  URL_AP = 'http://localhost:4000/api/Employees';

  constructor(public http: HttpClient) {
    this.selectedEmployee;
  }

  postEmployee(employee) {
    return this.http.post(this.URL_AP, employee);
  }

  getEmployees() {
    return this.http.get<Employee[]>(this.URL_AP);
  }

  putEmployee(employee: Employee) {
    return this.http.put(`${this.URL_AP}/${employee._id}`, employee);
  }

  deleteEmployee(_id: string) {
    return this.http.delete(`${this.URL_AP}/${_id}`);
  }
  getRoles() {
    return this.http.get('../../../assets/docs/Roles.json');
  }
}
