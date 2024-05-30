import { Routes } from '@angular/router';
import { PaginaHomeComponent } from './pagina-home/pagina-home.component';
import { PaginaProyectosComponent } from './pagina-proyectos/pagina-proyectos.component';
import { PaginaContactoComponent } from './pagina-contacto/pagina-contacto.component';
import { PaginaQuienesComponent } from './pagina-quienes/pagina-quienes.component';
import { EditarEmpleadoComponent } from './editar-empleado/editar-empleado.component';
import { PaginaErrorComponent } from './pagina-error/pagina-error.component';
import { LoginComponent } from './login/login.component';
import { LoginGuardian } from './login/login-guardian';
import { loginGuardNGuard } from './guard/login-guard-n.guard';

/**
 * ok, mira, NO USES "/ALGO", por eso no andaba!, dejalo asi nomas, sin la "/"
 * y ya,ya que la "/" es automatica, si dejas la "/", vas a tener que usar la dieraccion
 * con "//algo"
 */
export const routes: Routes = [
  { path: '', component: PaginaHomeComponent },
  { path: 'proyectos', component: PaginaProyectosComponent },
  {
    path: 'contacto',
    component: PaginaContactoComponent,
    canActivate: [loginGuardNGuard],
  },
  { path: 'quienesSomos', component: PaginaQuienesComponent },
  { path: 'editar/:id', component: EditarEmpleadoComponent },
  { path: 'login', component: LoginComponent },

  { path: '**', component: PaginaErrorComponent },
];
