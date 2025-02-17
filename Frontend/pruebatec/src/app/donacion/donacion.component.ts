import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxDropdownConfig, SelectDropDownModule } from 'ngx-select-dropdown';
import * as alertFunctions from '../alert/sweet-alerts';
import { RubroService } from '../service/rubro/rubro.service';
import { obtenerRubrosResponse, Rubro } from '../interface/rubro';
import { ProyectoService } from '../service/proyecto/proyecto.service';
import { obtenerProyectosResponse, Proyecto } from '../interface/proyecto';
import { Donacion, obtenerDonacionesResponse, crearDonacionRequest } from '../interface/donacion';
import { DonacionService } from '../service/donacion/donacion.service';
import { editarDonacionRequest } from '../interface/donacion';
import { eliminarDonacionRequest } from '../interface/donacion';

@Component({
  selector: 'app-donacion',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, ReactiveFormsModule, NgClass, SelectDropDownModule],
  templateUrl: './donacion.component.html',
  styleUrl: './donacion.component.scss'
})
export class DonacionComponent implements OnInit {

  donacionForm: FormGroup = new FormGroup({});
  donaciones: Donacion[] = [];
  titulos: string[] = ["Donador", "Monto", "Fecha", "Proyecto", "Nombre Proyecto", "Acciones"];
  tipo: number = 0;
  donacion?: Donacion;
  configPro: NgxDropdownConfig = {
    search: true,
    height: '250px',
    displayKey: 'nombre',
    placeholder: 'Seleccionar proyecto',
    noResultsFound: "Sin resultados",
    searchPlaceholder: 'Buscar',
    moreText: 'mas',
    // selectAllLabel: 'Seleccionar todos',
    // enableSelectAll: true
  };
  configRub: NgxDropdownConfig = {
    search: true,
    height: '250px',
    displayKey: 'nombre',
    placeholder: 'Seleccionar rubro(s)',
    noResultsFound: "Sin resultados",
    searchPlaceholder: 'Buscar',
    moreText: 'mas',
    // selectAllLabel: 'Seleccionar todos',
    // enableSelectAll: true
  };
  rubros: any[] = [];
  rubro?: Rubro;
  proyectos: Proyecto[] = [];
  proyecto?: Proyecto;
  accion: string = '';
  acciones: string[] = ["Crear", "Editar", "Eliminar", "Detalle"];

  constructor(public donacionService: DonacionService, public proyectoService: ProyectoService, public rubroService: RubroService) {
    this.donacionForm = new FormGroup({
      'inputId': new FormControl({ value: '', disabled: false }, [Validators.required]),
      'inputDonador': new FormControl({ value: '', disabled: false }, [Validators.required]),
      'inputMonto': new FormControl({ value: '', disabled: false }, [Validators.required]),
      // 'inputFecha': new FormControl({ value: '', disabled: false }, [Validators.required]),
      // 'inputProyecto': new FormControl({ value: '', disabled: false }, [Validators.required]),
      // 'inputNombre': new FormControl({ value: '', disabled: false }, [Validators.required])
    }, { updateOn: 'change' });
  }

  async ngOnInit() {
    this.obtenerDonaciones();
  }

  async obtenerDonaciones() {
    this.donacionService.obtenerDonaciones().then(async (res: obtenerDonacionesResponse) => {
      console.log('CONSULTA obtenerdonacions res', res)
      res.data = res.data.map((donacion:Donacion) => ({
        ...donacion,
        codigo: this.formatoId(donacion.proyecto),
      }));
      this.donaciones = res.data;
      console.log('CONSULTA obtenerdonacions this.donaciones', this.donaciones)
    }).catch(err => {
      console.log('CONSULTA obtenerdonacions err', err)
    });
  }

  async obtenerProyectos() {
    this.proyectos = [];
    this.proyectoService.obtenerProyectos().then(async (res: obtenerProyectosResponse) => {
      console.log('CONSULTA obtenerProyectos res', res)
      if (!res.data.length) {
        alertFunctions.alertaError(this.accion, 'No existen proyectos');
      } else {
        res.data = res.data.map(proyecto => ({
          ...proyecto,
          rubros: JSON.parse(proyecto.rubros.toString()),
          rubrosstr: JSON.parse(proyecto.rubros.toString()).map((rubro: any) => rubro.nombre).join(", "),
          codigo: this.formatoId(proyecto.id),
          totalpor: Number.isNaN(parseInt(proyecto.total.toString())) ? (parseInt(proyecto.disponible.toString()) / parseInt(proyecto.total.toString())) * 100 : 0
        }));
        this.proyectos = res.data;
      }
      console.log('CONSULTA obtenerProyectos this.proyectos', this.proyectos)
    }).catch(err => {
      console.log('CONSULTA obtenerProyectos err', err)
    });
  }

  async cargarRubros(id: number) {
    this.rubroService.obtenerRubrosProyecto({ id }).then(async (res: obtenerRubrosResponse) => {
      console.log('CONSULTA obtenerRubros res', res)
      if (!res.data.length) {
        alertFunctions.alertaError(this.accion, 'El proyecto no tiene rubros');
      } else {
        this.rubros = res.data;
      }
    }).catch(err => {
      console.log('CONSULTA obtenerRubros err', err)
    });
  }

  accionDonacion(tipo: number, donacion?: Donacion) {
    // Tipo 0 - crear, 1 - editar, 2 - eliminar, 3 - detalle
    this.tipo = tipo;
    this.donacion = donacion;
    this.accion = this.acciones[this.tipo]
    this.rubro = undefined;
    this.proyecto = undefined;
    this.proyectos = [];
    this.rubros = [];

    console.log(tipo, donacion);

    let dis = false;
    if (donacion) {
      if (this.tipo !== 1) {
        dis = true;
      }
      this.donacionForm = new FormGroup({
        'inputId': new FormControl({ value: donacion.id, disabled: true }, []),
        'inputCodigo': new FormControl({ value: donacion.codigo, disabled: true }, []),
        'inputNombre': new FormControl({ value: donacion.nombre, disabled: true }, []),
        'inputRubro': new FormControl({ value: donacion.rubro, disabled: true }, []),
        'inputDonador': new FormControl({ value: donacion.donador, disabled: dis }, [Validators.required]),
        'inputMonto': new FormControl({ value: donacion.monto, disabled: dis }, [Validators.required]),
        'inputFecha': new FormControl({ value: donacion.fecha, disabled: dis }, [Validators.required]),
        'inputProyectoRubro': new FormControl({ value: donacion.proyectorubro, disabled: true }, [])
        // 'inputFechaFinal': new FormControl({ value: donacion.fecha_fin, disabled: dis }, [Validators.required]),
        // 'inputRubros': new FormControl({ value: donacion.rubros, disabled: true }, [Validators.required]),
        // 'inputRubrosstr': new FormControl({ value: donacion.rubrosstr, disabled: true }, [Validators.required]),
        // 'inputDisponible': new FormControl({ value: donacion.disponible, disabled: true }, []),
        // 'inputTotal': new FormControl({ value: donacion.total, disabled: true }, []),
        // 'inputTotalPor': new FormControl({ value: donacion.totalpor + '%', disabled: true }, []),
      }, { updateOn: 'change' });
      // this.rubro = donacion.rubros;
    } else {
      this.obtenerProyectos();

      this.donacionForm = new FormGroup({
        // 'inputId': new FormControl({ value: '', disabled: true }, [Validators.required]),
        'inputProyecto': new FormControl({ value: '', disabled: dis }, [Validators.required]),
        'inputRubro': new FormControl({ value: '', disabled: dis }, [Validators.required]),
        'inputDonador': new FormControl({ value: '', disabled: dis }, [Validators.required]),
        'inputMonto': new FormControl({ value: '', disabled: dis }, [Validators.required]),
        // 'inputDepartamento': new FormControl({ value: '', disabled: dis }, [Validators.required]),
        // 'inputFecha': new FormControl({ value: '', disabled: dis }, [Validators.required]),
        // 'inputFechaFinal': new FormControl({ value: '', disabled: dis }, [Validators.required]),
        // 'inputRubros': new FormControl({ value: '', disabled: dis }, [Validators.required]),
      }, { updateOn: 'change' });
    }
  }

  async accionModal(tipo: number) {
    // Tipo 0 - crear, 1 - editar, 2 - eliminar, 3 - detalle
    let confirmado: boolean = await alertFunctions.confirmarCancelarAccion(this.accion + ' donacion');
    console.log('CONFIRMADO? ', confirmado)

    if (confirmado) {
      if (tipo === 0) {
        let donacion: crearDonacionRequest = {
          proyectorubro: this.donacionForm?.get('inputRubro')?.value.proyectorubro,
          donador: this.donacionForm?.get('inputDonador')?.value,
          monto: this.donacionForm?.get('inputMonto')?.value
        }
        console.log(donacion)

        await this.donacionService.crearDonacion(donacion).then((res: any) => {
          console.log('CONSULTA res', res);
          if (res.status !== 200) {
            alertFunctions.alertaError(this.accion, res.message)
          } else {
            alertFunctions.alertaExitosa(this.accion, 'Donacion realizada con exito')
            this.obtenerDonaciones();
          }
        }).catch(err => {
          console.log('CONSULTA err', err);
          alertFunctions.alertaError(this.accion, 'Hubo un problema en la donacion del rubro')
        });
      } else if (tipo === 1) {
        let donacion: editarDonacionRequest = {
          id: this.donacionForm?.get('inputId')?.value,
          donador: this.donacionForm?.get('inputDonador')?.value,
          monto: this.donacionForm?.get('inputMonto')?.value,
          fecha: this.donacionForm?.get('inputFecha')?.value,
          proyectorubro: this.donacionForm?.get('inputProyectoRubro')?.value,
        }
        console.log(donacion)
        await this.donacionService.actualizarDonacion(donacion).then((res: any) => {
          console.log('CONSULTA res', res);
          if (res.status !== 200) {
            alertFunctions.alertaError(this.accion, res.message)
          } else {
            alertFunctions.alertaExitosa(this.accion, 'Edicion realizada con exito')
            this.obtenerDonaciones();
          }
        }).catch(err => {
          console.log('CONSULTA err', err);
          alertFunctions.alertaError(this.accion, 'Hubo un problema en la edicion del rubro')
        });

      } else if (tipo === 2) {
        let donacion: eliminarDonacionRequest = {
          id: this.donacionForm?.get('inputId')?.value
        }

        await this.donacionService.eliminarDonacion(donacion).then((res: any) => {
          console.log('CONSULTA res', res);
          if (res.status !== 200) {
            alertFunctions.alertaError(this.accion, res.message)
          } else {
            alertFunctions.alertaExitosa(this.accion, 'Eliminacion realizada con exito')
            this.obtenerDonaciones();
          }
        }).catch(err => {
          console.log('CONSULTA err', err);
          alertFunctions.alertaError(this.accion, 'Hubo un problema en la eliminacion de la donacion')
        });
      }
    }
  }

  formatoId(id: number): string {
    return `P-${id.toString().padStart(4, '0')}`;
  }

  seleccionProyecto(ev: any) {
    this.donacionForm.controls["inputProyecto"].setValue(ev.value);
    this.rubros = [];

    console.log('CAMBIO 1', this.proyecto, this.donacionForm.value.inputProyecto, ev)
    if (this.proyecto) {
      this.cargarRubros(this.proyecto.id);
    }
  }

  seleccionRubro(ev: any) {
    this.donacionForm.controls["inputRubro"].setValue(ev.value);
    console.log('CAMBIO 2', this.rubro, this.donacionForm.value.inputRubro, ev)
  }

}
