import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Empleado } from './empleados.model';
import { NgFor, NgIf } from '@angular/common';
import { EmpleadoHijoComponent } from './empleado-hijo/empleado-hijo.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { DatosEmpleadosService } from './datos-empleados.service';
import { PaginaContactoComponent } from './pagina-contacto/pagina-contacto.component';
import { PaginaHomeComponent } from './pagina-home/pagina-home.component';
import { PaginaProyectosComponent } from './pagina-proyectos/pagina-proyectos.component';
import { PaginaQuienesComponent } from './pagina-quienes/pagina-quienes.component';
import { EditarEmpleadoComponent } from './editar-empleado/editar-empleado.component';
import { DataDbService } from './data-db.service';
import { HttpClientModule } from '@angular/common/http';
import firebase from 'firebase/compat/app';
import { ServicioLoginService } from './servicio-login.service';
import { CookieService } from 'ngx-cookie-service';
import { LoginGuardian } from './login/login-guardian';
import { loginGuardNGuard } from './guard/login-guard-n.guard';

@Component({
  selector: 'app-root',
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
    EditarEmpleadoComponent,
    RouterLink,
    HttpClientModule,
    NgIf,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    ServicioEmpleadosService,
    DatosEmpleadosService,
    DataDbService,
    ServicioLoginService,
    CookieService,
    LoginGuardian,
  ],
})
export class AppComponent {
  //nota, para que anden los servicios, necesitan ser privados o publicos,no los podes dejar asi nomas
  /**
   * nota 2, ahora pasamos el array a un servicio, por lo que, primero, creamos el servicio(obvio)
   * luego, lo importamos al componente principal, y lo usamos como datos
   * por ej, el array en si, se lo llama y se la compia al array de la app, esto, no seria necesario
   * si no hubiera componentes hijos que necesitan este array, pero como si es asi, se hace una copia y ya
   * luego, para agregar un empleado, es igual, se llama ala funcion de agregar empleado, se le pasa
   * el empleado, y listo, es literalmente lo mismo, pero mas separado, por lo que, no hay que hacer
   * casi cambios, solo tenes que fijarte bien los nombre, aca es de practica, pero, en otros proyectos
   * evita hacer servicios para cosas que realmente no sean servicios, si son funciones que solo
   * se necesitan en un solo lugar, no es un servicio
   */

  constructor(
    public servicioMensaje: ServicioEmpleadosService,
    public servicioArrayEmpleados: DatosEmpleadosService,
    public servicioLogin: ServicioLoginService
  ) {
    this.empleados = servicioArrayEmpleados.empleados;
  }
  ngOnInit(): void {
    /**
     * con esto, configuro firebase en mi app,
     */
    firebase.initializeApp({
      apiKey: 'AIzaSyCUeUN9lGRmitDDba8e5rzTMt-RgsxzKs8',
      authDomain: 'https://mis-clientes--p-default-rtdb.firebaseio.com',
    });
  }
  title = 'Listado de empleados';
  /**
   * aca tenemos que usar la interface Empleados, hay que importarla
   */
  nombre: string = '';
  apellido: string = '';
  puesto: string = '';
  salario: number = 0;
  /**
   * esto es una gilada tremanda, pero como ando medio bobo, lo voy a explicar ,asi me despierto
   * esto de abajo, es un array, del tipo empleado, solo acepta objetos del tipo empleado, pero
   * antes que eso, es un array, asi que ingora eso, por que te confunde un poco
   * luego adentro, tiene objetos del tipo empleado, pero no dejan de estar adentro de un array, asi
   * [empleado0,empleado1,empleado2,empleado3], por lo que, se pueden agregar objetos(del tipo empleado)
   * o quitarlos, eso es lo que hace la funcion de agregar empleado, agrega un empleado al array
   * y ya, facil
   */

  empleados: Empleado[] = [];
  agregarEmpleado() {
    //
    let nuevoEmpleado = new Empleado(
      this.nombre,
      this.apellido,
      this.puesto,
      this.salario
    );
    //this.empleados.push(nuevoEmpleado);
    this.servicioArrayEmpleados.agregarEmpleadoServicio(nuevoEmpleado);
    /**
     * aca lo que hicimos, es poner 2 servicios en 1,
     * basicamente, importamos el servicioMensaje dentro del servicio AgregarEmpleadosServicio, y ya
     * funciona exactamente igual
     */

    //this.servicioMensaje.mostrarMensaje('nombre del empleado: ' + nuevoEmpleado.nombre);
  }
  checkLogin() {
    return this.servicioLogin.obtenerIdToken();
  }
  logout() {
    this.servicioLogin.logout();
  }
}
