import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { LoadingComponent } from '../loading/loading.component';

@Injectable({
  providedIn: 'root'
})
export class AngularServiceService {

  url: string = environment.url;
  contador:number = 0;
  modal:any;

  constructor(private http: HttpClient, public loading: MatDialog) { }

  postAngular(data: {endpoint:string, data?:any}): Promise<any> {
    this.crearLoading();
    return new Promise((resolve, reject) => {
      this.http.post(`${this.url}/${data.endpoint}`, data.data).toPromise()
        .then((res: any) => {
          resolve(res);
        }).catch(err => {
          reject(err)
        }).finally(() => {
          this.cerrarLoading();
        });
    });
  }

  crearLoading() {
    if(this.contador === 0){
      this.modal = this.loading.open(LoadingComponent, {
        disableClose: true,
        panelClass: 'loadingPanel',
      },);
    }
    this.contador++;
  }

  cerrarLoading() {
    this.contador--;
    if(this.contador === 0){
      this.modal.close();
    }
  }
}
