import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFichePaieComponent } from './new-fiche-paie.component';

describe('NewFichePaieComponent', () => {
  let component: NewFichePaieComponent;
  let fixture: ComponentFixture<NewFichePaieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFichePaieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFichePaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
