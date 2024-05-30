import { Component, Input, input } from '@angular/core';
import { AppComponent } from '../app.component';
import { NgFor } from '@angular/common';
import { Empleado } from '../empleados.model';
import { CaracteristicasEmpleadoComponent } from '../caracteristicas-empleado/caracteristicas-empleado.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-empleado-hijo',
  standalone: true,
  imports: [NgFor, CaracteristicasEmpleadoComponent, RouterLink],
  templateUrl: './empleado-hijo.component.html',
  styleUrl: './empleado-hijo.component.css',
})
export class EmpleadoHijoComponent {
  /**
   * hay que pasar bien las cosas, si es del tipo Empleado[], hay que pasarlo asi, si o si
   * nota, lo cambie por que me daba un error, ya que duplicaba los datos de los elementos hijos
   * pero sigue aplicando lo de antes
   * explico
   * estabamos creando una lista, dentro de otra lista, pero, esta lista se repetia, por que a la lista en si
   * le asiganabamos el mismo objeto, osea, a cada elemento del la lista, tenia el mismo X
   * lo que cambiamos es que, primero ahora asignamos el objeto/caracteristica que queremos, y luego armamos la lista
   * esto se puede hacer como estaba antes, hay que cambiar algunas cosas, pero ahora no se me ocurre
   * y no estoy como para jugar ahora a esto, cuando la hay una solucion igual de simple y disponible
   * lo dejamos para la proxima en otro programa, pero fijate bien, si estas perdido, no copies y peges
   * por que asi no sirve
   */
  @Input() empleadoIndividual: Empleado;
  @Input() indice: number;
  arrayCaracteristicas = [''];

  agregarCaracteristica(caracteristica: string) {
    this.arrayCaracteristicas.push(caracteristica);
  }
}
