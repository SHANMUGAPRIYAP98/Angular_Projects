import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FraudulentPaymentComponent } from './fraudulent-payment.component';

describe('FraudulentPaymentComponent', () => {
  let component: FraudulentPaymentComponent;
  let fixture: ComponentFixture<FraudulentPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FraudulentPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FraudulentPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
