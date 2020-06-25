import {
	Directive,
	HostListener,
	Input,
	Output,
	EventEmitter,
} from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx';
import { IConfig } from './config.interface';
import { IonCameraService } from './ion-camra.service';

@Directive({
	selector: '[appIonCamera]',
})
export class IonCameraDirective {
	@Input('appIonCamera') config: IConfig;
	@Output() cameraResult: EventEmitter<any> = new EventEmitter();

	@HostListener('click', ['$event']) onCameraElementClicked(event: Event) {
		if (
			this.config.outputType === 'blob' &&
			this._camera.DestinationType.FILE_URI
		) {
			this.getCameraData(this.config);
		} else if (
			this.config.outputType === 'base64' &&
			this._camera.DestinationType.DATA_URL
		) {
			this.getCameraData(this.config);
		} else {
			throw new Error(
				'This method is not yet implmented! either use DATA_URL or FILE_URI',
			);
		}
	}

	constructor(
		private _ionCameraService: IonCameraService,
		private _camera: Camera,
	) {}

	async getCameraData(option: IConfig) {
		const result = await this._ionCameraService.cameraAction(option);
		this.cameraResult.emit(result);
	}
}
