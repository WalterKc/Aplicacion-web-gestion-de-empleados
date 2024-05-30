import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class ServicioLoginService {
  constructor(private router: Router, private cookie: CookieService) {
    //
  }
  token: string; //guardamos el token
  login(email: string, password: string) {
    /**
     * ok, esto es algo jodido, pero , voy a hacer lo mejor que pueda en explicarlo ahora que puedo
     * ok, esto de firebase, no me lo invente yo, ya viene asi,asi que, tenes que usar si o si lo que viene
     * es entendible la verdad, pero, si queres saber lo que trae, tenes que leer la docu, no queda otra
     * igual voy a explicar lo que pasa aca
     * se llama a firebase, se llama a la funcion de autenticacion (auth), se llama a la funcion de signInWithEmailAndPassword
     * que, como dice su nombre, espera un email y passworl(esto se configura en la misma base de datos firebase con antemano)
     * esto, es una promesa, ya que te estas comunicando con el servidor, asi que tenes que usar un .then(response)
     * y su funcion flecha
     * luego, en la respuesta, se llama otra vez a la funcion auth,y si pasa la utenticacion (currentUser?), se obtiene
     * un token (getIdToken()), luego, se guarda ese token arriba y se cambia de pagina con el router
     * a su ves, este tocken, mas tarde se va a usar para crear una cookie, asi que, aunque se borre este se borre
     * con cada cambio de pagina, la cookie va a quedar
     */
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        firebase
          .auth()
          .currentUser?.getIdToken()
          .then((token) => {
            this.token = token;
            this.cookie.set('token', this.token);
            this.router.navigate(['/']);
          });
      });
  }
  obtenerIdToken() {
    //return this.token;
    return this.cookie.get('token');
  }
  obtenerCookie() {
    return this.cookie.get('token');
  }
  logout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.token = '';
        this.cookie.set('token', '');
        this.router.navigate(['/']);
        window.location.reload();
      });
  }
}
