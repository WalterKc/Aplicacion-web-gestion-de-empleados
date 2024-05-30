import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Empleado } from '../empleados.model';
import { NgFor } from '@angular/common';
import { EmpleadoHijoComponent } from '../empleado-hijo/empleado-hijo.component';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { DatosEmpleadosService } from '../datos-empleados.service';
import { PaginaContactoComponent } from '../pagina-contacto/pagina-contacto.component';
import { PaginaProyectosComponent } from '../pagina-proyectos/pagina-proyectos.component';
import { PaginaQuienesComponent } from '../pagina-quienes/pagina-quienes.component';
import { routes } from '../app.routes';

@Component({
  selector: 'app-pagina-home',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    NgFor,
    EmpleadoHijoComponent,
    PaginaContactoComponent,
    PaginaHomeComponent,
    PaginaProyectosComponent,
    PaginaQuienesComponent,
  ],
  templateUrl: './pagina-home.component.html',
  styleUrl: './pagina-home.component.css',
})
//
export class PaginaHomeComponent {
  /**
   * aca lo que hacemos es sencillo, primero traemos el html, asi a pelo
   * luego traemos todas las importaciones, menos las repetidas
   * y luego, vamos quitando los errores del html, como?, se van trayendo las propiedades
   * o funciones correspondientes, tardamos 4 minutos , literal
   */
  title = 'Listado de empleados';
  nombre: string = '';
  apellido: string = '';
  puesto: string = '';
  salario: number = 0;
  empleados: Empleado[] = [];
  constructor(
    public servicioMensaje: ServicioEmpleadosService,
    public servicioArrayEmpleados: DatosEmpleadosService
  ) {}
  ngOnInit(): void {
    //this.empleados = servicioArrayEmpleados.empleados;
    this.servicioArrayEmpleados.obtenerEmpleadosDB().subscribe({
      /**
       * aca lo que hacesmos ,es copiar los arrays que traemos del db al array empleados internos, asi podes
       * visualizarlo/usarlo mas facilmente
       *
       */
      next: (misEmpleados) => {
        console.log(misEmpleados);
        console.log('keys: ' + Object.values(misEmpleados));
        console.log('values: ' + Object.keys(misEmpleados));
        this.empleados = Object.values(misEmpleados);
        this.servicioArrayEmpleados.setMasEmplados(this.empleados);
      },
    });
    console.log('Se actualiza la lista!');
  }
  agregarEmpleado() {
    //
    let nuevoEmpleado = new Empleado(
      this.nombre,
      this.apellido,
      this.puesto,
      this.salario
    );
    this.servicioArrayEmpleados.agregarEmpleadoServicio(nuevoEmpleado);
  }
}
