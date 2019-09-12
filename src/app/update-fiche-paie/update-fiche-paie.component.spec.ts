import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFichePaieComponent } from './update-fiche-paie.component';

describe('UpdateFichePaieComponent', () => {
  let component: UpdateFichePaieComponent;
  let fixture: ComponentFixture<UpdateFichePaieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateFichePaieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFichePaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
