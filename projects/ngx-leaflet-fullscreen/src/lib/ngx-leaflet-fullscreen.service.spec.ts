import { TestBed } from '@angular/core/testing';

import { NgxLeafletFullscreenService } from './ngx-leaflet-fullscreen.service';

describe('NgxLeafletFullscreenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxLeafletFullscreenService = TestBed.get(NgxLeafletFullscreenService);
    expect(service).toBeTruthy();
  });
});
