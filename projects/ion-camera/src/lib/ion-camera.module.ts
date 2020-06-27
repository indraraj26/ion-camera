import { NgModule, ModuleWithProviders } from '@angular/core';
import { IonCameraDirective } from './ion-camera.directive';
import { Camera } from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { HttpClientModule } from '@angular/common/http';
import { IonCameraService } from './ion-camra.service';

@NgModule({
	declarations: [IonCameraDirective],
	imports: [HttpClientModule],
	exports: [IonCameraDirective],
	providers: [Camera, WebView],
})
export class IonCameraModule {
	public static forRoot(): ModuleWithProviders {
		return {
			ngModule: IonCameraModule,
			providers: [IonCameraService],
		};
	}
}
