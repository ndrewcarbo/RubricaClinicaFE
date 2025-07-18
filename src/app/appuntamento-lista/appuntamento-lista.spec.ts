import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppuntamentoLista } from './appuntamento-lista';

describe('AppuntamentoLista', () => {
  let component: AppuntamentoLista;
  let fixture: ComponentFixture<AppuntamentoLista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppuntamentoLista]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppuntamentoLista);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
