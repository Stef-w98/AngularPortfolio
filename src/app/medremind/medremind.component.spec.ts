import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedremindComponent } from './medremind.component';

describe('MedremindComponent', () => {
  let component: MedremindComponent;
  let fixture: ComponentFixture<MedremindComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedremindComponent]
    });
    fixture = TestBed.createComponent(MedremindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
