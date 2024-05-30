import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
//este provideRouter(routes), reemplaza a RouterModule.forChild(routes), ya que, esta forma de rutas, no funciona
//con el angular moderno, pero es lo mismo

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideRouter(routes)],
};
