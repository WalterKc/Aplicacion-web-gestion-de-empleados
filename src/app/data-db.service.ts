import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from './empleados.model';
import { ServicioLoginService } from './servicio-login.service';

@Injectable({
  providedIn: 'root',
})
export class DataDbService {
  constructor(
    private httpClient: HttpClient,
    private servicioLogin: ServicioLoginService
  ) {}
  //esto actualiza/usa siempre la misma lista de empleados, no crea una nueva
  //para eso hay que usar put
  //also, en la base de datos, los datos van a aprecer ordenados alfabeticamente, osea, no importa como los tengas
  //aca, apellido va a aprecer primero,por que empieza por "a"
  guardarEmpleados(empleado: Empleado[]) {
    this.httpClient
      .put(
        'https://mis-clientes--p-default-rtdb.firebaseio.com/datos.json',
        empleado
      )
      //nota:, hay que usar esta forma, por que la anterior va a perder soporte, es lo mismo casi, pero un poco mas detallado

      .subscribe({
        next: (response) => {
          console.log('se han guardado los empleados: ' + response);
        },
        error: (error) => {
          console.log('este es un error: ', error);
        },
      });
  }
  cargarEmpleados() {
    //nota, aca cargamos le token, pero solo se carga aca, si cambias de pagina se borra, por que no los estamos pasando
    //este tambien se agrega ala url, ya se se configuro para necesitar auth
    const token = this.servicioLogin.obtenerIdToken();
    return this.httpClient.get(
      'https://mis-clientes--p-default-rtdb.firebaseio.com/datos.json?auth=' +
        token
    );
  }
  actualizarEmpleados(empleado: Empleado, indice: number) {
    //tener cuidado con las barras "/"
    this.httpClient
      .put(
        'https://mis-clientes--p-default-rtdb.firebaseio.com/datos/' +
          indice +
          '.json',
        empleado
      )
      .subscribe({
        next: (response) => {
          console.log('se han actualizadp el empleado: ' + response);
        },
        error: (error) => {
          console.log('este es un error: ', error);
        },
      });
  }
}
