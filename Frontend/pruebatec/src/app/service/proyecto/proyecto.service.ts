import { Injectable } from '@angular/core';
import { AngularServiceService } from '../angular-service.service';
import { crearProyectoRequest, editarProyectoRequest, eliminarProyectoRequest } from '../../interface/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  endpoint:string = 'proyecto';

  constructor(private angularService:AngularServiceService) { }

  crearProyecto(data:crearProyectoRequest): Promise<any>{
    return new Promise((resolve, reject) => {
      this.angularService.postAngular({ endpoint: `${this.endpoint}/crearProyecto`, data: data })
        .then(res => {
          resolve(res);
        }).catch(err => {
          reject(err)
        });
    });
  }

  obtenerProyectos(): Promise<any>{
    return new Promise((resolve, reject) => {
      this.angularService.postAngular({ endpoint: `${this.endpoint}/obtenerProyectos` })
        .then(res => {
          resolve(res);
        }).catch(err => {
          reject(err)
        });
    });
  }

  actualizarProyecto(data:editarProyectoRequest): Promise<any>{
    return new Promise((resolve, reject) => {
      this.angularService.postAngular({ endpoint: `${this.endpoint}/actualizarProyecto`, data:data })
        .then(res => {
          resolve(res);
        }).catch(err => {
          reject(err)
        });
    });
  }

  eliminarProyecto(data:eliminarProyectoRequest): Promise<any>{
    return new Promise((resolve, reject) => {
      this.angularService.postAngular({ endpoint: `${this.endpoint}/eliminarProyecto`, data:data })
        .then(res => {
          resolve(res);
        }).catch(err => {
          reject(err)
        });
    });
  }
  
}
