import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Infracciones } from '../models/Infracciones';
@Injectable({
  providedIn: 'root',
})
export class InfraccionesService {
  URL_AP = 'http://localhost:4000/api/infracciones';

  infracciones: Infracciones[];
  selectedInfraccion: any = {
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

  constructor(public http: HttpClient) {}

  getInfracciones() {
    return this.http.get<Infracciones[]>(this.URL_AP);
  }

  CreateInfraccion(infracccion: Infracciones) {
    return this.http.post(this.URL_AP, infracccion);
  }

  putInfraccion(infraccion: Infracciones) {
    return this.http.put(`${this.URL_AP}/${infraccion._id}`, infraccion);
  }

  deleteInfraccion(_id: string) {
    return this.http.delete(`${this.URL_AP}/${_id}`);
  }

  buscarI(PlacaVehicular) {
    return this.http.post<any>(this.URL_AP + '/buscar', PlacaVehicular);
  }
  getTipoInfracciones() {
    return this.http.get('../../../assets/docs/TipoDeInfracciones.json');
  }
  getRutas() {
    return this.http.get('../../../assets/docs/Rutas.json');
  }
}
