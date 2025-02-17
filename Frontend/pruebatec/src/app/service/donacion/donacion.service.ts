import { Injectable } from '@angular/core';
import { AngularServiceService } from '../angular-service.service';
import { crearProyectoRequest } from '../../interface/proyecto';
import { crearRubroRequest, obtenerRubrosResponse, Rubro } from '../../interface/rubro';
import { crearDonacionRequest, editarDonacionRequest, eliminarDonacionRequest, obtenerDonacionesResponse } from '../../interface/donacion';

@Injectable({
  providedIn: 'root'
})
export class DonacionService {

  endpoint:string = 'donacion';

  constructor(private angularService:AngularServiceService) { }

  obtenerDonaciones(): Promise<any>{
    return new Promise((resolve, reject) => {
      this.angularService.postAngular({ endpoint: `${this.endpoint}/obtenerDonaciones` })
        .then((res:obtenerDonacionesResponse) => {
          resolve(res);
        }).catch(err => {
          reject(err)
        });
    });
  }

  crearDonacion(data:crearDonacionRequest): Promise<any>{
    return new Promise((resolve, reject) => {
      this.angularService.postAngular({ endpoint: `${this.endpoint}/crearDonacion`, data: data })
        .then(res => {
          resolve(res);
        }).catch(err => {
          reject(err)
        });
    });
  }

  actualizarDonacion(data:editarDonacionRequest): Promise<any>{
    return new Promise((resolve, reject) => {
      this.angularService.postAngular({ endpoint: `${this.endpoint}/actualizarDonacion`, data: data })
        .then(res => {
          resolve(res);
        }).catch(err => {
          reject(err)
        });
    });
  }
  
  eliminarDonacion(data:eliminarDonacionRequest): Promise<any>{
    return new Promise((resolve, reject) => {
      this.angularService.postAngular({ endpoint: `${this.endpoint}/eliminarDonacion`, data: data })
        .then(res => {
          resolve(res);
        }).catch(err => {
          reject(err)
        });
    });
  }
  
}
