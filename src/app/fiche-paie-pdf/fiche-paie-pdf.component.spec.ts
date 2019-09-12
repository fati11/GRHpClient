import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichePaiePdfComponent } from './fiche-paie-pdf.component';

describe('FichePaiePdfComponent', () => {
  let component: FichePaiePdfComponent;
  let fixture: ComponentFixture<FichePaiePdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichePaiePdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichePaiePdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
