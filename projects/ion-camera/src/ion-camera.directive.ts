import {
	Directive,
	HostListener,
	Input,
	Output,
	EventEmitter,
} from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx';
import { IConfig } from './config.interface';
import { WebView } from '@ionic-native/ionic-webview/ngx';

@Directive({
	selector: '[appIonCamera]',
})
export class IonCameraDirective {
	@Input() config: IConfig;
	@Output() cameraResult: EventEmitter<any> = new EventEmitter();

	@HostListener('click', ['$event']) onCameraElementClicked(event: Event) {
		if (
			this.config.outputResult === 'blob' &&
			this._camera.DestinationType.FILE_URI
		) {
			this.cameraAction(this.config);
		} else if (
			this.config.outputResult === 'base64' &&
			this._camera.DestinationType.DATA_URL
		) {
			this.cameraAction(this.config);
		} else {
			throw new Error(
				'This method is not yet implmented! either use DATA_URL or FILE_URI',
			);
		}
	}

	constructor(private _camera: Camera, private _webview: WebView) {}

	private async cameraAction(option: IConfig) {
		try {
			const result = await this._camera.getPicture(option);
			if (this.config.outputResult === 'blob') {
				const blobUrl = this._webview.convertFileSrc(result);
				const blob = await fetch(blobUrl).then((r) => r.blob());
				this.cameraResult.emit(blob);
			} else {
				this.cameraResult.emit(result);
			}
		} catch (e) {
			console.log(e);
		}
	}
}
