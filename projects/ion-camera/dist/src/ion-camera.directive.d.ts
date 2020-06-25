import { EventEmitter } from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx';
import { IConfig } from './config.interface';
import { IonCameraService } from './ion-camra.service';
export declare class IonCameraDirective {
    private _ionCameraService;
    private _camera;
    config: IConfig;
    cameraResult: EventEmitter<any>;
    onCameraElementClicked(event: Event): void;
    constructor(_ionCameraService: IonCameraService, _camera: Camera);
    getCameraData(option: IConfig): Promise<void>;
}
