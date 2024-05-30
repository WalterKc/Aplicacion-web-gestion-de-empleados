import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ServicioLoginService } from '../servicio-login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  /**
   * ok,antes de hacer pelotudeces, ahora que no estoy bobo, la idea es capturar estos datos, compararlos
   * con los del server/db, conseguir un tokem y guarladrlo en una cookie, cosa que ya hice, por mi mismo
   * no es dificil,pero como ando medio bobo ultimamente, voy a ir explicando cada cosa, hasta que se me pase
   *
   */

  password: string = '';
  email: string = '';
  constructor(private serviciooLogin: ServicioLoginService) {}
  //este es el servicio de login, hace en login en si, es lo mismo que en react, pero se importa aca,
  //se va a explicar alla que hace, para no llenar aca al pepe

  login(formulario: NgForm) {
    //esta es la funcion del formulario, se pasan los valores del formulario, simple y nada raro
    //tambien se llama al login de serviciologin
    const passwordFormulario = formulario.value.password;
    const emailFormulario = formulario.value.email;
    /*
    console.log('formulario ', formulario);
    console.log('email ', this.email);
    console.log('password ', this.password);
    */
    this.serviciooLogin.login(emailFormulario, passwordFormulario);
  }
}
