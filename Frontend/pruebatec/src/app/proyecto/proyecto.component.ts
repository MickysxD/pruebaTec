import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { crearProyectoRequest, editarProyectoRequest, eliminarProyectoRequest, obtenerProyectosResponse, Proyecto } from '../interface/proyecto';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProyectoService } from '../service/proyecto/proyecto.service';
import { NgxDropdownConfig, SelectDropDownModule } from 'ngx-select-dropdown'
import * as alertFunctions from '../alert/sweet-alerts';
import { RubroService } from '../service/rubro/rubro.service';
import { obtenerRubrosResponse } from '../interface/rubro';

@Component({
  selector: 'app-proyecto',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, ReactiveFormsModule, NgClass, SelectDropDownModule],
  templateUrl: './proyecto.component.html',
  styleUrl: './proyecto.component.scss'
})
export class ProyectoComponent implements OnInit {

  proyectoForm: FormGroup = new FormGroup({});
  proyectos: Proyecto[] = [];
  titulos: string[] = ["Codigo", "Nombre", "Municipio", "Departamento", /*"Fecha Inicial", "Fecha Final",*/ "Acciones"];
  tipo: number = 0;
  proyecto?: Proyecto;
  config: NgxDropdownConfig = {
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
  rubros: any[] = [
    { nombre: "Identificador", id: 1 },
    { nombre: "Nombre", id: 2 },
    { nombre: "Municipio", id: 3 },
    { nombre: "Departamento", id: 4 }
  ];
  rubro: any[] = [];
  accion: string = '';
  acciones: string[] = ["Crear", "Editar", "Eliminar", "Detalle"];

  constructor(public proyectoService: ProyectoService, public rubroService: RubroService) {
    this.proyectoForm = new FormGroup({
      // 'inputNombre': new FormControl({ value: '', disabled: (this.opcion !== 'Crear' && this.opcion !== 'Modificar') || this.odontologo }, [Validators.required]),
      'inputId': new FormControl({ value: '', disabled: false }, [Validators.required]),
      'inputNombre': new FormControl({ value: '', disabled: false }, [Validators.required]),
      'inputMunicipio': new FormControl({ value: '', disabled: false }, [Validators.required]),
      'inputDepartamento': new FormControl({ value: '', disabled: false }, [Validators.required]),
      'inputFechaInicial': new FormControl({ value: '', disabled: false }, [Validators.required]),
      'inputFechaFinal': new FormControl({ value: '', disabled: false }, [Validators.required]),
      'inputRubros': new FormControl({ value: '', disabled: false }, [Validators.required]),
    }, { updateOn: 'change' });
  }

  async ngOnInit() {
    this.cargarRubros();
    this.obtenerProyectos();
  }

  async obtenerProyectos() {
    this.proyectoService.obtenerProyectos().then(async (res: obtenerProyectosResponse) => {
      console.log('CONSULTA obtenerProyectos res', res)
      res.data = res.data.map(proyecto => ({
        ...proyecto,
        rubros: JSON.parse(proyecto.rubros.toString()),
        rubrosstr: JSON.parse(proyecto.rubros.toString()).map((rubro:any) => rubro.nombre).join(", "),
        codigo: this.formatoId(proyecto.id),
        totalpor: Number.isNaN(parseInt(proyecto.total.toString())) ? (parseInt(proyecto.disponible.toString())/parseInt(proyecto.total.toString()))*100 : 0
      }));
      this.proyectos = res.data;
      console.log('CONSULTA obtenerProyectos this.proyectos', this.proyectos)
    }).catch(err => {
      console.log('CONSULTA obtenerProyectos err', err)
    });
  }

  async cargarRubros() {
    this.rubroService.obtenerRubros().then(async (res: obtenerRubrosResponse) => {
      console.log('CONSULTA obtenerRubros res', res)
      this.rubros = res.data;
    }).catch(err => {
      console.log('CONSULTA obtenerRubros err', err)
    });
  }

  accionProyecto(tipo: number, proyecto?: Proyecto) {
    // Tipo 0 - crear, 1 - editar, 2 - eliminar, 3 - detalle
    this.tipo = tipo;
    this.proyecto = proyecto;
    this.accion = this.acciones[this.tipo]
    this.rubro = [];
    console.log(tipo, proyecto);

    let dis = false;
    if (proyecto) {
      if (this.tipo !== 1) {
        dis = true;
      }
      this.proyectoForm = new FormGroup({
        'inputId': new FormControl({ value: proyecto.id, disabled: true }, []),
        'inputCodigo': new FormControl({ value: proyecto.codigo, disabled: true }, [Validators.required]),
        'inputNombre': new FormControl({ value: proyecto.nombre, disabled: dis }, [Validators.required]),
        'inputMunicipio': new FormControl({ value: proyecto.municipio, disabled: dis }, [Validators.required]),
        'inputDepartamento': new FormControl({ value: proyecto.departamento, disabled: dis }, [Validators.required]),
        'inputFechaInicial': new FormControl({ value: proyecto.fecha_inicio, disabled: dis }, [Validators.required]),
        'inputFechaFinal': new FormControl({ value: proyecto.fecha_fin, disabled: dis }, [Validators.required]),
        'inputRubros': new FormControl({ value: proyecto.rubros, disabled: true }, [Validators.required]),
        'inputRubrosstr': new FormControl({ value: proyecto.rubrosstr, disabled: true }, [Validators.required]),
        'inputDisponible': new FormControl({ value: proyecto.disponible, disabled: true }, []),
        'inputTotal': new FormControl({ value: proyecto.total, disabled: true }, []),
        'inputTotalPor': new FormControl({ value: proyecto.totalpor + '%', disabled: true }, []),
      }, { updateOn: 'change' });
      this.rubro = proyecto.rubros;
    } else {
      this.proyectoForm = new FormGroup({
        // 'inputId': new FormControl({ value: '', disabled: true }, [Validators.required]),
        'inputNombre': new FormControl({ value: '', disabled: dis }, [Validators.required]),
        'inputMunicipio': new FormControl({ value: '', disabled: dis }, [Validators.required]),
        'inputDepartamento': new FormControl({ value: '', disabled: dis }, [Validators.required]),
        'inputFechaInicial': new FormControl({ value: '', disabled: dis }, [Validators.required]),
        'inputFechaFinal': new FormControl({ value: '', disabled: dis }, [Validators.required]),
        'inputRubros': new FormControl({ value: '', disabled: dis }, [Validators.required]),
      }, { updateOn: 'change' });
      this.rubro = [];
    }
  }

  async accionModal(tipo: number) {
    // Tipo 0 - crear, 1 - editar, 2 - eliminar, 3 - detalle
    let confirmado: boolean = await alertFunctions.confirmarCancelarAccion(this.accion + ' proyecto');
    console.log('CONFIRMADO? ', confirmado)

    if (confirmado) {
      if (tipo === 0) {
        let proyecto: crearProyectoRequest = {
          nombre: this.proyectoForm?.get('inputNombre')?.value,
          municipio: this.proyectoForm?.get('inputMunicipio')?.value,
          departamento: this.proyectoForm?.get('inputDepartamento')?.value,
          fecha_inicio: this.proyectoForm?.get('inputFechaInicial')?.value,
          fecha_fin: this.proyectoForm?.get('inputFechaFinal')?.value,
          rubros: this.proyectoForm?.get('inputRubros')?.value
        }
        console.log(proyecto)
        console.log(this.proyectoForm.value.inputRubros);

        await this.proyectoService.crearProyecto(proyecto).then((res: any) => {
          console.log('CONSULTA res', res);
          if (res.status !== 200) {
            alertFunctions.alertaError(this.accion, res.message)
          } else {
            alertFunctions.alertaExitosa(this.accion, 'Creacion realizada con exito')
            this.obtenerProyectos();
          }
        }).catch(err => {
          console.log('CONSULTA err', err);
          alertFunctions.alertaError(this.accion, 'Hubo un problema en la creacion del rubro')
        });
      } else if (tipo === 1) {
        let proyecto: editarProyectoRequest = {
          id: this.proyectoForm?.get('inputId')?.value,
          nombre: this.proyectoForm?.get('inputNombre')?.value,
          municipio: this.proyectoForm?.get('inputMunicipio')?.value,
          departamento: this.proyectoForm?.get('inputDepartamento')?.value,
          fecha_inicio: this.proyectoForm?.get('inputFechaInicial')?.value,
          fecha_fin: this.proyectoForm?.get('inputFechaFinal')?.value
        }

        await this.proyectoService.actualizarProyecto(proyecto).then((res: any) => {
          console.log('CONSULTA res', res);
          if (res.status !== 200) {
            alertFunctions.alertaError(this.accion, res.message)
          } else {
            alertFunctions.alertaExitosa(this.accion, 'Edicion realizada con exito')
            this.obtenerProyectos();
          }
        }).catch(err => {
          console.log('CONSULTA err', err);
          alertFunctions.alertaError(this.accion, 'Hubo un problema en la edicion del rubro')
        });

      } else if (tipo === 2) {
        let proyecto: eliminarProyectoRequest = {
          id: this.proyectoForm?.get('inputId')?.value
        }

        await this.proyectoService.eliminarProyecto(proyecto).then((res: any) => {
          console.log('CONSULTA res', res);
          if (res.status !== 200) {
            alertFunctions.alertaError(this.accion, res.message)
          } else {
            alertFunctions.alertaExitosa(this.accion, 'Eliminacion realizada con exito')
            this.obtenerProyectos();
          }
        }).catch(err => {
          console.log('CONSULTA err', err);
          alertFunctions.alertaError(this.accion, 'Hubo un problema en la eliminacion del rubro')
        });
      }
    }
  }

  formatoId(id: number): string {
    return `P-${id.toString().padStart(4, '0')}`;
  }

  selectionChanged(ev: any) {
    this.proyectoForm.controls["inputRubros"].setValue(ev.value);
    console.log('CAMBIO 1', this.rubro, this.proyectoForm.value.inputRubros, ev)
  }

}
