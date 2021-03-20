import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromiseApiComponent } from './promise-api.component';

describe('PromiseApiComponent', () => {
  let component: PromiseApiComponent;
  let fixture: ComponentFixture<PromiseApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromiseApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromiseApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
