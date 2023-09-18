import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoJugarComponent } from './juego-jugar.component';

describe('JuegoJugarComponent', () => {
  let component: JuegoJugarComponent;
  let fixture: ComponentFixture<JuegoJugarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JuegoJugarComponent]
    });
    fixture = TestBed.createComponent(JuegoJugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
