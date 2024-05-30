import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServicioEmpleadosService {
  constructor() {}
  mostrarMensaje(mensaje: any) {
    alert(mensaje);
  }
}
