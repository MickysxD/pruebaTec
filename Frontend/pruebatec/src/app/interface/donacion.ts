export interface Donacion {
  id: number;
  donador: string;
  monto: string;
  fecha: string;
  proyecto: number;
  codigo: string;
  nombre: string;
  proyectorubro: number;
  rubro: string;
}

export interface crearDonacionRequest {
  proyectorubro: number;
  donador: string;
  monto: number;
}

export interface obtenerDonacionesResponse {
  data: Donacion[];
}

export interface editarDonacionRequest {
  id: number;
  donador: string;
  monto: string;
  fecha: string;
  proyectorubro: number;
}

export interface eliminarDonacionRequest {
  id: number;
}