import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Employee } from '../models/Employees';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  employee: Employee = {
    Cedula: '',
    Direccion: '',
    Nombre: '',
    Apellido: '',
    Correo: '',
    Contrasena: '',
    Cargo: '',
    Telefono: '',
  };

  public URL_AP = 'http://localhost:4000/api/Employees';

  constructor(public http: HttpClient, public router: Router) {
    this.employee;
  }

  login(employee) {
    return this.http.post<any>(this.URL_AP + '/login', employee);
  }
  loggedIn() {
    return !!localStorage.getItem('token');
  }
  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('Cargo');
    localStorage.removeItem('Apellido');
    localStorage.removeItem('Nombre');
    this.router.navigate(['/buscarinfracciones']);
  }
  getToken() {
    return localStorage.getItem('token');
  }

  getCargo() {
    return localStorage.getItem('Cargo');
  }
  getNombre() {
    return localStorage.getItem('Nombre');
  }
  getApellido() {
    return localStorage.getItem('Apellido');
  }
}
