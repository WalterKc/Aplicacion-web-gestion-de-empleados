import { Injectable } from '@angular/core';
import { Empleado } from './empleados.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { DataDbService } from './data-db.service';

@Injectable({
  providedIn: 'root',
})
export class DatosEmpleadosService {
  constructor(
    public servicioMensaje: ServicioEmpleadosService,
    private dataServiceDb: DataDbService
  ) {
    /*
    //aca seteamos los empleados por primera vez, hay varias formas de hacer esto, asi que no esta mal esta
    this.obtenerEmpleadosDB().subscribe({
      next: (misEmpleados) => {
        this.empleados = Object.values(misEmpleados);
      },
    });
    console.log('se actualiza la lista!');
    */
  }

  /*
  empleados: Empleado[] = [
    new Empleado('juan', 'diaz', 'presidente', 7000),
    new Empleado('maria', 'pololo', 'administrativa', 3500),
    new Empleado('david', 'fermandez', 'secretario', 2500),
    new Empleado('raul', 'rivaineira', 'mantenimiento', 2000),
  ];
  */
  empleados: Empleado[] = [];
  setMasEmplados(misEmpleado: Empleado[]) {
    this.empleados = misEmpleado;
  }

  agregarEmpleadoServicio(nuevoEmpleado: Empleado) {
    this.empleados.push(nuevoEmpleado);
    this.servicioMensaje.mostrarMensaje(
      'nombre del empleado: ' +
        nuevoEmpleado.nombre +
        'salario: ' +
        nuevoEmpleado.salario
    );
    this.dataServiceDb.guardarEmpleados(this.empleados);
  }
  editarEmpleadoServicio(empleado: Empleado, indice: number) {
    this.empleados[indice] = empleado;
    this.dataServiceDb.actualizarEmpleados(empleado, indice);
  }
  eliminarEmpleadoServicio(indice: number) {
    //
    this.empleados.splice(indice, 1);
  }
  obtenerEmpleadosDB() {
    return this.dataServiceDb.cargarEmpleados();
  }
}
