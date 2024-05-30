import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaQuienesComponent } from './pagina-quienes.component';

describe('PaginaQuienesComponent', () => {
  let component: PaginaQuienesComponent;
  let fixture: ComponentFixture<PaginaQuienesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaQuienesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginaQuienesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
