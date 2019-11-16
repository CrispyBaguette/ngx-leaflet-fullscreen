import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FullscreenDemoComponent } from './fullscreen-demo/fullscreen-demo.component';
import { NgxLeafletFullscreenModule } from 'projects/ngx-leaflet-fullscreen/src/public-api';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  declarations: [
    AppComponent,
    FullscreenDemoComponent
  ],
  imports: [
    BrowserModule,
    NgxLeafletFullscreenModule,
    LeafletModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
