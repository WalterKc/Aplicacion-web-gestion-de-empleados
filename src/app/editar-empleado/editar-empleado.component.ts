import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Empleado } from '../empleados.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { DatosEmpleadosService } from '../datos-empleados.service';

@Component({
  selector: 'app-editar-empleado',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar-empleado.component.html',
  styleUrl: './editar-empleado.component.css',
})
export class EditarEmpleadoComponent {
  /**
   * esto es facil pero aburrido, pero igual lo voy a explicar
   * primero, copiamos todo lo del home
   * luego llamamos al servicio route: ActivatedRoute, esto ya viene con algunlar, a su ves, creamos
   * this.indice = this.route.snapshot.params['id']; con estos 2, podes camputar este id que pasamos al url
   * con esto ya echo, simplemente, llamasmos al array de empleados del servicio de datos de empleados
   * y sobreescribimos los datos que tenemos abajo, nombre,apellido,cargo y salario
   * y ya, se puede hacer de otra forma, pero no le vi la necesidad, por ahora
   */
  title = 'Listado de empleados';
  nombre: string = '';
  apellido: string = '';
  cargo: string = '';
  salario: number = 0;
  empleados: Empleado[] = [];
  indice: number;
  empleadoActual: Empleado;

  constructor(
    private router: Router,
    public servicioMensaje: ServicioEmpleadosService,
    public servicioArrayEmpleados: DatosEmpleadosService,
    private route: ActivatedRoute
  ) {
    this.empleados = servicioArrayEmpleados.empleados;
    this.indice = this.route.snapshot.params['id'];
    let empleado: Empleado = servicioArrayEmpleados.empleados[this.indice];
    this.empleadoActual = empleado;
    this.nombre = empleado.nombre;
    this.apellido = empleado.apellido;
    this.cargo = empleado.cargo;
    this.salario = empleado.salario;
  }

  volverHome() {
    this.router.navigate(['']);
  }
  editarEmpleado() {
    //
    let nuevoEmpleado = new Empleado(
      this.nombre,
      this.apellido,
      this.cargo,
      this.salario
    );
    /**
     * esto es facil tambien, creamos la funcion/servicio editarEmpleadoServicio, esta require del empleado
     * y del indice, luego, en el servicio, con este indice, llamamos al empleado requerido, y se lo sobreescribe y ya
     */
    this.servicioArrayEmpleados.editarEmpleadoServicio(
      nuevoEmpleado,
      this.indice
    );
    this.servicioArrayEmpleados.obtenerEmpleadosDB().subscribe({
      next: (misEmpleados) => {
        this.empleados = Object.values(misEmpleados);
        this.servicioArrayEmpleados.setMasEmplados(this.empleados);
      },
    });
    this.volverHome();
  }
  eliminarEmpleado() {
    // que tecnica, ni vi la guia, ya ando fuerte
    this.servicioArrayEmpleados.eliminarEmpleadoServicio(this.indice);
    this.volverHome();
  }
}
