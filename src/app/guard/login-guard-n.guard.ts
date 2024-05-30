import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ServicioLoginService } from '../servicio-login.service';

export const loginGuardNGuard: CanActivateFn = (route, state) => {
  const token = inject(ServicioLoginService);
  const router = inject(Router);

  if (token.obtenerIdToken()) {
    console.log('ES TRUE');
    return true;
  } else {
    router.navigate(['login']);
    console.log('ES FALSE');
    return false;
  }

  //return true;
};
