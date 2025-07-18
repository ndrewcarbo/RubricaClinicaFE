import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PazienteDettaglio } from './paziente-dettaglio';

describe('PazienteDettaglio', () => {
  let component: PazienteDettaglio;
  let fixture: ComponentFixture<PazienteDettaglio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PazienteDettaglio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PazienteDettaglio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
