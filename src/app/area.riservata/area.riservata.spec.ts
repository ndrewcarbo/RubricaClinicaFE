import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaRiservata } from './area.riservata';

describe('AreaRiservata', () => {
  let component: AreaRiservata;
  let fixture: ComponentFixture<AreaRiservata>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreaRiservata]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaRiservata);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
