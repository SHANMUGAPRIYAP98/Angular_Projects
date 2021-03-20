import { TestBed } from '@angular/core/testing';

import { FraudPaymentService } from './fraud-payment.service';

describe('FraudPaymentService', () => {
  let service: FraudPaymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FraudPaymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
