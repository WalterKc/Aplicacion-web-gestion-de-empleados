import { Component, Output, EventEmitter } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleado',
  standalone: true,
  imports: [],
  templateUrl: './caracteristicas-empleado.component.html',
  styleUrl: './caracteristicas-empleado.component.css',
})
export class CaracteristicasEmpleadoComponent {
  @Output() CaracteristicasEmpleadoHijo = new EventEmitter<string>();
  constructor(public servicionMensaje: ServicioEmpleadosService) {}

  agregarCaracteristicasHijo(value: string) {
    this.CaracteristicasEmpleadoHijo.emit(value);
    this.servicionMensaje.mostrarMensaje('Caracteristica : ' + value);
  }
}
