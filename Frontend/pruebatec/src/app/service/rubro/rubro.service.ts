import { Injectable } from '@angular/core';
import { AngularServiceService } from '../angular-service.service';
import { crearProyectoRequest } from '../../interface/proyecto';
import { crearRubroRequest, obtenerRubrosProyectoRequest, obtenerRubrosResponse, Rubro } from '../../interface/rubro';

@Injectable({
  providedIn: 'root'
})
export class RubroService {

  endpoint:string = 'rubro';

  constructor(private angularService:AngularServiceService) { }

  crearRubro(data:crearRubroRequest): Promise<any>{
    return new Promise((resolve, reject) => {
      this.angularService.postAngular({ endpoint: `${this.endpoint}/crearRubro`, data: data })
        .then(res => {
          resolve(res);
        }).catch(err => {
          reject(err)
        });
    });
  }

  obtenerRubros(): Promise<any>{
    return new Promise((resolve, reject) => {
      this.angularService.postAngular({ endpoint: `${this.endpoint}/obtenerRubros` })
        .then((res:obtenerRubrosResponse) => {
          resolve(res);
        }).catch(err => {
          reject(err)
        });
    });
  }

  obtenerRubrosProyecto(data:obtenerRubrosProyectoRequest): Promise<any>{
    return new Promise((resolve, reject) => {
      this.angularService.postAngular({ endpoint: `${this.endpoint}/obtenerRubrosProyecto`, data: data })
        .then((res:obtenerRubrosResponse) => {
          resolve(res);
        }).catch(err => {
          reject(err)
        });
    });
  }
  
  actualizarRubro(data:Rubro): Promise<any>{
    return new Promise((resolve, reject) => {
      this.angularService.postAngular({ endpoint: `${this.endpoint}/actualizarRubro`, data: data })
        .then(res => {
          resolve(res);
        }).catch(err => {
          reject(err)
        });
    });
  }
  
  eliminarRubro(data:Rubro): Promise<any>{
    return new Promise((resolve, reject) => {
      this.angularService.postAngular({ endpoint: `${this.endpoint}/eliminarRubro`, data: data })
        .then(res => {
          resolve(res);
        }).catch(err => {
          reject(err)
        });
    });
  }
  
}
