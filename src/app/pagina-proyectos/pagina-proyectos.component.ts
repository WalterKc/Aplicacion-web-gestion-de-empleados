import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Empleado } from '../empleados.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { DatosEmpleadosService } from '../datos-empleados.service';

@Component({
  selector: 'app-pagina-proyectos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pagina-proyectos.component.html',
  styleUrl: './pagina-proyectos.component.css',
})
export class PaginaProyectosComponent {
  title = 'Listado de empleados';
  nombre: string = '';
  apellido: string = '';
  puesto: string = '';
  salario: number = 0;
  empleados: Empleado[] = [];

  constructor(
    private router: Router,
    public servicioMensaje: ServicioEmpleadosService,
    public servicioArrayEmpleados: DatosEmpleadosService
  ) {
    this.empleados = servicioArrayEmpleados.empleados;
  }

  volverHome() {
    this.router.navigate(['']);
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
    this.volverHome();
  }
}
