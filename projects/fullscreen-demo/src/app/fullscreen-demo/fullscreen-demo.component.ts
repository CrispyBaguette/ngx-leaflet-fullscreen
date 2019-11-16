import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-fullscreen-demo',
  templateUrl: './fullscreen-demo.component.html',
  styleUrls: ['./fullscreen-demo.component.css']
})
export class FullscreenDemoComponent {

  options: {};

  constructor() {
    this.options = {
      layers: [
        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
      ],
      zoom: 12,
      center: L.latLng(48.5734053, 7.7521113)
    };
  }

  fullscreenEntered() {
    console.log('Fullscreen mode entered !');
  }

  fullscreenExited() {
    console.log('Fullscreen mode exited !');
  }

  fullscreenControlReady() {
    console.log('Fullscreen control ready !');
  }

}
