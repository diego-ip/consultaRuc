import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadorDetailComponent } from './empleador-detail.component';

describe('EmpleadorDetailComponent', () => {
  let component: EmpleadorDetailComponent;
  let fixture: ComponentFixture<EmpleadorDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleadorDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
