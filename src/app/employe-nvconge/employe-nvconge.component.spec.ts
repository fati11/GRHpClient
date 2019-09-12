import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeNVcongeComponent } from './employe-nvconge.component';

describe('EmployeNVcongeComponent', () => {
  let component: EmployeNVcongeComponent;
  let fixture: ComponentFixture<EmployeNVcongeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeNVcongeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeNVcongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
