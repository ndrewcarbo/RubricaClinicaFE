import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppuntamentoInserisci } from './appuntamento-inserisci';

describe('AppuntamentoInserisci', () => {
  let component: AppuntamentoInserisci;
  let fixture: ComponentFixture<AppuntamentoInserisci>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppuntamentoInserisci]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppuntamentoInserisci);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
