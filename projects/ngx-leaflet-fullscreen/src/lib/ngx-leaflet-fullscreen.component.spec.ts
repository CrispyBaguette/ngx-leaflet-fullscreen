import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLeafletFullscreenComponent } from './ngx-leaflet-fullscreen.component';

describe('NgxLeafletFullscreenComponent', () => {
  let component: NgxLeafletFullscreenComponent;
  let fixture: ComponentFixture<NgxLeafletFullscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxLeafletFullscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxLeafletFullscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
