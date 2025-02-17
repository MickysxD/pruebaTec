import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SelectDropDownModule } from 'ngx-select-dropdown'
import { crearRubroRequest, obtenerRubrosResponse, Rubro } from '../interface/rubro';
import { RubroService } from '../service/rubro/rubro.service';
import * as alertFunctions from '../alert/sweet-alerts';

@Component({
  selector: 'app-rubro',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, ReactiveFormsModule, NgClass, SelectDropDownModule],
  templateUrl: './rubro.component.html',
  styleUrl: './rubro.component.scss'
})
export class RubroComponent implements OnInit {

  rubroForm: FormGroup = new FormGroup({});
  rubros: Rubro[] = [];
  titulos: string[] = ["Identificador", "Nombre", "Acciones"];
  tipo: number = 0;
  accion: string = '';
  acciones: string[] = ["Crear", "Editar", "Eliminar", "Detalle"];
  rubro?: Rubro;

  constructor(public rubroService: RubroService) {
    this.rubroForm = new FormGroup({
      'inputId': new FormControl({ value: '', disabled: false }, [Validators.required]),
      'inputNombre': new FormControl({ value: '', disabled: false }, [Validators.required])
    }, { updateOn: 'change' });
  }

  async ngOnInit() {
    this.cargarRubros();
  }

  cargarRubros() {
    this.rubroService.obtenerRubros().then(async (res: obtenerRubrosResponse) => {
      console.log('CONSULTA obtenerRubros res', res)
      this.rubros = res.data;
    }).catch(err => {
      console.log('CONSULTA obtenerRubros err', err)
    });
  }

  accionRubro(tipo: number, rubro?: Rubro) {
    // Tipo 0 - crear, 1 - editar, 2 - eliminar, 3 - detalle
    this.tipo = tipo;
    this.rubro = rubro;
    this.accion = this.acciones[tipo]
    console.log(this.accion, rubro);

    let dis = false;
    if (rubro) {
      if (this.tipo !== 1) {
        dis = true;
      }
      this.rubroForm = new FormGroup({
        'inputId': new FormControl({ value: rubro.id, disabled: true }, [Validators.required]),
        'inputNombre': new FormControl({ value: rubro.nombre, disabled: dis }, [Validators.required])
      }, { updateOn: 'change' });
    } else {
      this.rubroForm = new FormGroup({
        'inputId': new FormControl({ value: '', disabled: true }, [Validators.required]),
        'inputNombre': new FormControl({ value: '', disabled: dis }, [Validators.required])
      }, { updateOn: 'change' });
    }
  }

  async accionModal(tipo: number) {
    console.log('accionModal', tipo)
    // Tipo 0 - crear, 1 - editar, 2 - eliminar, 3 - detalle
    let confirmado: boolean = await alertFunctions.confirmarCancelarAccion(this.accion + ' rubro');
    console.log('CONFIRMADO? ', confirmado)

    if (confirmado) {
      if (tipo === 0) {
        let rubro: crearRubroRequest = {
          nombre: this.rubroForm?.get('inputNombre')?.value
        }

        await this.rubroService.crearRubro(rubro).then((res: any) => {
          console.log('CONSULTA crearRubro res', res)
          if (res.status !== 200) {
            alertFunctions.alertaError(this.accion, res.message)
          } else {
            alertFunctions.alertaExitosa(this.accion, 'Creacion realizada con exito')
            this.cargarRubros();
          }
        }).catch(err => {
          console.log('CONSULTA crearRubro err', err)
          alertFunctions.alertaError(this.accion, 'Hubo un problema en la creacion del rubro')
        });
      } else if (tipo === 1) {
        let rubro: Rubro = {
          id: this.rubroForm?.get('inputId')?.value,
          nombre: this.rubroForm?.get('inputNombre')?.value
        }

        await this.rubroService.actualizarRubro(rubro).then((res: any) => {
          console.log('CONSULTA actualizarRubro res', res)
          if (res.status !== 200) {
            alertFunctions.alertaError(this.accion, res.message)
          } else {
            alertFunctions.alertaExitosa(this.accion, 'Edicion realizada con exito')
            this.cargarRubros();
          }
        }).catch(err => {
          console.log('CONSULTA actualizarRubro err', err)
          alertFunctions.alertaError(this.accion, 'Hubo un problema en la edicion del rubro')
        });

      } else if (tipo === 2) {
        let rubro: Rubro = {
          id: this.rubroForm?.get('inputId')?.value,
          nombre: this.rubroForm?.get('inputNombre')?.value
        }

        await this.rubroService.eliminarRubro(rubro).then((res: any) => {
          console.log('CONSULTA eliminarRubro res', res)
          if (res.status !== 200) {
            alertFunctions.alertaError(this.accion, res.message)
          } else {
            alertFunctions.alertaExitosa(this.accion, 'Eliminacion realizada con exito')
            this.cargarRubros();
          }
        }).catch(err => {
          console.log('CONSULTA eliminarRubro err', err)
          alertFunctions.alertaError(this.accion, 'Hubo un problema en la eliminacion del rubro')
        });
      }
    }
  }

  formatoId(id: number): string {
    return `P-${id.toString().padStart(4, '0')}`;
  }

  selectionChanged(ev: any) {
    this.rubroForm.controls["inputRubros"].setValue(ev.value);
    console.log('CAMBIO 1', this.rubro, this.rubroForm.value.inputRubros, ev)
  }

}
