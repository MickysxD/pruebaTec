export interface Rubro {
  id: number;
  nombre: string;
}

export interface crearRubroRequest {
  nombre: string;
}

export interface obtenerRubrosResponse {
  data: Rubro[];
}

export interface obtenerRubrosProyectoRequest {
  id: number;
}