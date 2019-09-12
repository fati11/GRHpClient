import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadFichePaieComponent } from './download-fiche-paie.component';

describe('DownloadFichePaieComponent', () => {
  let component: DownloadFichePaieComponent;
  let fixture: ComponentFixture<DownloadFichePaieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadFichePaieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadFichePaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
