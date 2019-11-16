import { LeafletFullscreenDirective } from './ngx-leaflet-fullscreen.directive';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { Component, inject } from '@angular/core';
import { LeafletModule, LeafletDirective } from '@asymmetrik/ngx-leaflet';
import * as screenfull from 'screenfull';

@Component({
  template: '<div></div>'
})
class TestComponent { }

describe('LeafletFullscreenDirective', async () => {
  let leafletDirective: LeafletDirective;
  let directive: LeafletFullscreenDirective;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        LeafletFullscreenDirective,
        TestComponent
      ],
      imports: [
        LeafletModule.forRoot()
      ]
    });

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    leafletDirective = new LeafletDirective(fixture.elementRef, fixture.ngZone);
    directive = new LeafletFullscreenDirective(leafletDirective, fixture.ngZone);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should return the control', () => {
    expect(directive.getFullscreenControl).toBeTruthy();
  });
});
