import {
	Directive,
	HostListener,
	Input,
	Output,
	EventEmitter,
} from '@angular/core';
import { IConfig } from './config.interface';
import { IonCameraService } from './ion-camera.service';

@Directive({
	selector: '[appIonCamera]',
})
export class IonCameraDirective {
	@Input('appIonCamera') config: IConfig;
	@Output() cameraResult: EventEmitter<any> = new EventEmitter();

	@HostListener('click', ['$event']) onCameraElementClicked(event: Event) {
		// File URI
		if (this.config.destinationType === 1) {
			this.getCameraData(this.config);
			// Data URL
		} else if (this.config.destinationType === 0) {
			this.getCameraData(this.config);
		} else {
			throw new Error(
				'This method is not yet implmented! either use DATA_URL(0) or FILE_URI(1)',
			);
		}
	}

	constructor(private _ionCameraService: IonCameraService) {}

	async getCameraData(option: IConfig) {
		const result = await this._ionCameraService.cameraAction(option);
		this.cameraResult.emit(result);
	}
}
