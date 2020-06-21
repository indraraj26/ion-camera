import { __awaiter, __decorate } from 'tslib';
import { EventEmitter, Input, Output, HostListener, Directive, NgModule } from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';

let IonCameraDirective = class IonCameraDirective {
    constructor(_camera, _webview) {
        this._camera = _camera;
        this._webview = _webview;
        this.cameraResult = new EventEmitter();
    }
    onCameraElementClicked(event) {
        if (this.config.outputResult === 'blob' &&
            this._camera.DestinationType.FILE_URI) {
            this.cameraAction(this.config);
        }
        else if (this.config.outputResult === 'base64' &&
            this._camera.DestinationType.DATA_URL) {
            this.cameraAction(this.config);
        }
        else {
            throw new Error('This method is not yet implmented! either use DATA_URL or FILE_URI');
        }
    }
    cameraAction(option) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this._camera.getPicture(option);
                if (this.config.outputResult === 'blob') {
                    const blobUrl = this._webview.convertFileSrc(result);
                    const blob = yield fetch(blobUrl).then((r) => r.blob());
                    this.cameraResult.emit(blob);
                }
                else {
                    this.cameraResult.emit(result);
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
};
IonCameraDirective.ctorParameters = () => [
    { type: Camera },
    { type: WebView }
];
__decorate([
    Input()
], IonCameraDirective.prototype, "config", void 0);
__decorate([
    Output()
], IonCameraDirective.prototype, "cameraResult", void 0);
__decorate([
    HostListener('click', ['$event'])
], IonCameraDirective.prototype, "onCameraElementClicked", null);
IonCameraDirective = __decorate([
    Directive({
        selector: '[appIonCamera]',
    })
], IonCameraDirective);

let IonCameraModule = class IonCameraModule {
};
IonCameraModule = __decorate([
    NgModule({
        declarations: [IonCameraDirective],
        imports: [],
        exports: [IonCameraDirective],
        providers: [Camera, WebView],
    })
], IonCameraModule);

/*
 * Public API Surface of ion-camera
 */

/**
 * Generated bundle index. Do not edit.
 */

export { IonCameraDirective, IonCameraModule };
//# sourceMappingURL=indraraj26-ion-camera.js.map
