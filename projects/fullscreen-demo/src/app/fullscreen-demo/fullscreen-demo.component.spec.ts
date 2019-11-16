import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullscreenDemoComponent } from './fullscreen-demo.component';

describe('FullscreenDemoComponent', () => {
  let component: FullscreenDemoComponent;
  let fixture: ComponentFixture<FullscreenDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullscreenDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullscreenDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
