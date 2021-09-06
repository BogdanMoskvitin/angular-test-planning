import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TosheduleComponent } from './toshedule.component';

describe('TosheduleComponent', () => {
  let component: TosheduleComponent;
  let fixture: ComponentFixture<TosheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TosheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TosheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
