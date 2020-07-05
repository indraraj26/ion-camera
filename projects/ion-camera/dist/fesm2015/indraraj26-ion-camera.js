import { __awaiter, __decorate } from 'tslib';
import { Injectable, EventEmitter, Input, Output, HostListener, Directive, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Camera } from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';

let IonCameraService = class IonCameraService {
    constructor(_httpClient, _camera, _webview) {
        this._httpClient = _httpClient;
        this._camera = _camera;
        this._webview = _webview;
    }
    cameraAction(option) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this._camera.getPicture(option);
                if (option.destinationType === 1) {
                    const blobUrl = this._webview.convertFileSrc(result);
                    const blob = (yield fetch(blobUrl).then((r) => r.blob()));
                    return { result: blob, filePath: blobUrl };
                }
                return { result };
            }
            catch (e) {
                if (e === 'No Image Selected') {
                    return e;
                }
                return 'no-permission';
            }
        });
    }
};
IonCameraService.ctorParameters = () => [
    { type: HttpClient },
    { type: Camera },
    { type: WebView }
];
IonCameraService = __decorate([
    Injectable()
], IonCameraService);

let IonCameraDirective = class IonCameraDirective {
    constructor(_ionCameraService) {
        this._ionCameraService = _ionCameraService;
        this.cameraResult = new EventEmitter();
    }
    onCameraElementClicked(event) {
        // File URI
        if (this.config.destinationType === 1) {
            this.getCameraData(this.config);
            // Data URL
        }
        else if (this.config.destinationType === 0) {
            this.getCameraData(this.config);
        }
        else {
            throw new Error('This method is not yet implmented! either use DATA_URL(0) or FILE_URI(1)');
        }
    }
    getCameraData(option) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._ionCameraService.cameraAction(option);
            this.cameraResult.emit(result);
        });
    }
};
IonCameraDirective.ctorParameters = () => [
    { type: IonCameraService }
];
__decorate([
    Input('appIonCamera')
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

var IonCameraModule_1;
let IonCameraModule = IonCameraModule_1 = class IonCameraModule {
    static forRoot() {
        return {
            ngModule: IonCameraModule_1,
            providers: [IonCameraService],
        };
    }
};
IonCameraModule = IonCameraModule_1 = __decorate([
    NgModule({
        declarations: [IonCameraDirective],
        imports: [HttpClientModule],
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

export { IonCameraDirective, IonCameraModule, IonCameraService };
//# sourceMappingURL=indraraj26-ion-camera.js.map
