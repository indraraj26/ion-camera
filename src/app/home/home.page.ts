import { Component } from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx';
// import { WebView } from '@ionic-native/ionic-webview/ngx';
@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {
	constructor(private camera: Camera) {}

	config = {
		quality: 50,
		destinationType: this.camera.DestinationType.FILE_URI,
		encodingType: this.camera.EncodingType.JPEG,
		mediaType: this.camera.MediaType.PICTURE,
		outputResult: 'blob',
	};

	onCameraResult(event: any) {
		console.log('returns base64 or blob');
		console.log(event);
	}
}
