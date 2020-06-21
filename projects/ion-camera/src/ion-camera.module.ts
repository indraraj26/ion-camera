import { NgModule } from '@angular/core';
import { IonCameraDirective } from './ion-camera.directive';
import { Camera } from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';

@NgModule({
	declarations: [IonCameraDirective],
	imports: [],
	exports: [IonCameraDirective],
	providers: [Camera, WebView],
})
export class IonCameraModule {}
