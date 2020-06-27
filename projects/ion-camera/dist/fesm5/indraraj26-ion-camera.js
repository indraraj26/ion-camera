import { __awaiter, __generator, __decorate } from 'tslib';
import { ɵɵdefineInjectable, ɵɵinject, Injectable, EventEmitter, Input, Output, HostListener, Directive, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Camera } from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Camera as Camera$1 } from '@ionic-native/camera/ngx/index';
import { WebView as WebView$1 } from '@ionic-native/ionic-webview/ngx/index';

var IonCameraService = /** @class */ (function () {
    function IonCameraService(_httpClient, _camera, _webview) {
        this._httpClient = _httpClient;
        this._camera = _camera;
        this._webview = _webview;
    }
    IonCameraService.prototype.cameraAction = function (option) {
        return __awaiter(this, void 0, void 0, function () {
            var result, blobUrl, blob, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, this._camera.getPicture(option)];
                    case 1:
                        result = _a.sent();
                        if (!(option.destinationType === 1)) return [3 /*break*/, 3];
                        blobUrl = this._webview.convertFileSrc(result);
                        return [4 /*yield*/, fetch(blobUrl).then(function (r) { return r.blob(); })];
                    case 2:
                        blob = _a.sent();
                        return [2 /*return*/, blob];
                    case 3: return [2 /*return*/, result];
                    case 4:
                        e_1 = _a.sent();
                        if (e_1 === 'No Image Selected') {
                            return [2 /*return*/, e_1];
                        }
                        return [2 /*return*/, 'no-permission'];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    IonCameraService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: Camera },
        { type: WebView }
    ]; };
    IonCameraService.ɵprov = ɵɵdefineInjectable({ factory: function IonCameraService_Factory() { return new IonCameraService(ɵɵinject(HttpClient), ɵɵinject(Camera$1), ɵɵinject(WebView$1)); }, token: IonCameraService, providedIn: "root" });
    IonCameraService = __decorate([
        Injectable({ providedIn: 'root' })
    ], IonCameraService);
    return IonCameraService;
}());

var IonCameraDirective = /** @class */ (function () {
    function IonCameraDirective(_ionCameraService) {
        this._ionCameraService = _ionCameraService;
        this.cameraResult = new EventEmitter();
    }
    IonCameraDirective.prototype.onCameraElementClicked = function (event) {
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
    };
    IonCameraDirective.prototype.getCameraData = function (option) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._ionCameraService.cameraAction(option)];
                    case 1:
                        result = _a.sent();
                        this.cameraResult.emit(result);
                        return [2 /*return*/];
                }
            });
        });
    };
    IonCameraDirective.ctorParameters = function () { return [
        { type: IonCameraService }
    ]; };
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
    return IonCameraDirective;
}());

var IonCameraModule = /** @class */ (function () {
    function IonCameraModule() {
    }
    IonCameraModule_1 = IonCameraModule;
    IonCameraModule.forRoot = function () {
        return {
            ngModule: IonCameraModule_1,
            providers: [IonCameraService],
        };
    };
    var IonCameraModule_1;
    IonCameraModule = IonCameraModule_1 = __decorate([
        NgModule({
            declarations: [IonCameraDirective],
            imports: [HttpClientModule],
            exports: [IonCameraDirective],
            providers: [Camera, WebView],
        })
    ], IonCameraModule);
    return IonCameraModule;
}());

/*
 * Public API Surface of ion-camera
 */

/**
 * Generated bundle index. Do not edit.
 */

export { IonCameraDirective, IonCameraModule, IonCameraService };
//# sourceMappingURL=indraraj26-ion-camera.js.map
