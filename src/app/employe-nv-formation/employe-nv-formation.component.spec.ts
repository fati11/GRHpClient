import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeNvFormationComponent } from './employe-nv-formation.component';

describe('EmployeNvFormationComponent', () => {
  let component: EmployeNvFormationComponent;
  let fixture: ComponentFixture<EmployeNvFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeNvFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeNvFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
