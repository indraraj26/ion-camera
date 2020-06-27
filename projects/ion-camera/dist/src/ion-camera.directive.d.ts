import { EventEmitter } from '@angular/core';
import { IConfig } from './config.interface';
import { IonCameraService } from './ion-camra.service';
export declare class IonCameraDirective {
    private _ionCameraService;
    config: IConfig;
    cameraResult: EventEmitter<any>;
    onCameraElementClicked(event: Event): void;
    constructor(_ionCameraService: IonCameraService);
    getCameraData(option: IConfig): Promise<void>;
}
