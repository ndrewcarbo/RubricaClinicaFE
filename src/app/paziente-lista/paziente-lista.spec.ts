import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PazienteLista } from './paziente-lista';

describe('PazienteLista', () => {
  let component: PazienteLista;
  let fixture: ComponentFixture<PazienteLista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PazienteLista]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PazienteLista);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
