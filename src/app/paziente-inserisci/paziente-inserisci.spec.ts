import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PazienteInserisci } from './paziente-inserisci';

describe('PazienteInserisci', () => {
  let component: PazienteInserisci;
  let fixture: ComponentFixture<PazienteInserisci>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PazienteInserisci]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PazienteInserisci);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
