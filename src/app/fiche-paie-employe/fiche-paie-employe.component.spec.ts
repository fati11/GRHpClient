import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichePaieEmployeComponent } from './fiche-paie-employe.component';

describe('FichePaieEmployeComponent', () => {
  let component: FichePaieEmployeComponent;
  let fixture: ComponentFixture<FichePaieEmployeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichePaieEmployeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichePaieEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
