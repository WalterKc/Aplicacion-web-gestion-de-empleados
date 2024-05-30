import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

import { ServicioLoginService } from '../servicio-login.service';
@Injectable()
export class LoginGuardian implements CanActivate {
  constructor(
    private loginService: ServicioLoginService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.loginService.obtenerIdToken()) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
  /*
    export const guardian:CanActivateFn=(route: ActivatedRouteSnapshot,state: RouterStateSnapshot):boolean=>{
        return inject(LoginGuardian).canActivate(route,state)
    }
    */
}
