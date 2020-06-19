import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioConsultaComponent } from './inicio-consulta.component';

describe('InicioConsultaComponent', () => {
  let component: InicioConsultaComponent;
  let fixture: ComponentFixture<InicioConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
