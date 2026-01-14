import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationFormCompoment } from './reservation-form';

describe('ReservationForm', () => {
  let component: ReservationFormCompoment;
  let fixture: ComponentFixture<ReservationFormCompoment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservationFormCompoment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationFormCompoment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
