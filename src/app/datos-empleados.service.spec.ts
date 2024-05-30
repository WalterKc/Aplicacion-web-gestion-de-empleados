import { TestBed } from '@angular/core/testing';

import { DatosEmpleadosService } from './datos-empleados.service';

describe('DatosEmpleadosService', () => {
  let service: DatosEmpleadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosEmpleadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
