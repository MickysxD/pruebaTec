export interface Proyecto {
  id: number;
  codigo: string;
  nombre: string;
  municipio: string;
  departamento: string;
  fecha_inicio: string;
  fecha_fin: string;
  rubros: any[];
  total: number;
  disponible: number;
  totalpor: number;
  rubrosstr: string;
}

export interface crearProyectoRequest {
  nombre: string;
  municipio: string;
  departamento: string;
  fecha_inicio: string;
  fecha_fin: string;
  rubros: number[];
}

export interface obtenerProyectosResponse {
  data: Proyecto[];
}

export interface editarProyectoRequest {
  id: number;
  nombre: string;
  municipio: string;
  departamento: string;
  fecha_inicio: string;
  fecha_fin: string;
}


export interface eliminarProyectoRequest {
  id: number;
}