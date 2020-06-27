import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Camera } from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { IConfig } from './config.interface';

@Injectable({ providedIn: 'root' })
export class IonCameraService {
	constructor(
		private _httpClient: HttpClient,
		private _camera: Camera,
		private _webview: WebView,
	) {}

	async cameraAction(option: IConfig) {
		try {
			const result = await this._camera.getPicture(option);
			if (option.destinationType === 1) {
				const blobUrl = this._webview.convertFileSrc(result);
				const blob = await fetch(blobUrl).then((r) => r.blob());
				return blob;
			}
			return result;
		} catch (e) {
			if (e === 'No Image Selected') {
				return e;
			}
			return 'no-permission';
		}
	}
}
