import { EventEmitter } from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx';
import { IConfig } from './config.interface';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import * as ɵngcc0 from '@angular/core';
export declare class IonCameraDirective {
    private _camera;
    private _webview;
    config: IConfig;
    cameraResult: EventEmitter<any>;
    onCameraElementClicked(event: Event): void;
    constructor(_camera: Camera, _webview: WebView);
    private cameraAction;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonCameraDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<IonCameraDirective, "[appIonCamera]", never, { "config": "config"; }, { "cameraResult": "cameraResult"; }, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLWNhbWVyYS5kaXJlY3RpdmUuZC50cyIsInNvdXJjZXMiOlsiaW9uLWNhbWVyYS5kaXJlY3RpdmUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDYW1lcmEgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NhbWVyYS9uZ3gnO1xyXG5pbXBvcnQgeyBJQ29uZmlnIH0gZnJvbSAnLi9jb25maWcuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgV2ViVmlldyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvaW9uaWMtd2Vidmlldy9uZ3gnO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBJb25DYW1lcmFEaXJlY3RpdmUge1xyXG4gICAgcHJpdmF0ZSBfY2FtZXJhO1xyXG4gICAgcHJpdmF0ZSBfd2VidmlldztcclxuICAgIGNvbmZpZzogSUNvbmZpZztcclxuICAgIGNhbWVyYVJlc3VsdDogRXZlbnRFbWl0dGVyPGFueT47XHJcbiAgICBvbkNhbWVyYUVsZW1lbnRDbGlja2VkKGV2ZW50OiBFdmVudCk6IHZvaWQ7XHJcbiAgICBjb25zdHJ1Y3RvcihfY2FtZXJhOiBDYW1lcmEsIF93ZWJ2aWV3OiBXZWJWaWV3KTtcclxuICAgIHByaXZhdGUgY2FtZXJhQWN0aW9uO1xyXG59XHJcbiJdfQ==