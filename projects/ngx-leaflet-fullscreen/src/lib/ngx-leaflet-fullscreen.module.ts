import { NgModule } from '@angular/core';
import { LeafletFullscreenDirective } from './ngx-leaflet-fullscreen.directive';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';


@NgModule({
  declarations: [LeafletFullscreenDirective],
  imports: [
    LeafletModule.forRoot()
  ],
  exports: [LeafletFullscreenDirective]
})
export class NgxLeafletFullscreenModule { }
