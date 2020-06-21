import { __awaiter, __generator, __decorate } from 'tslib';
import { EventEmitter, Input, Output, HostListener, Directive, NgModule } from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';

var IonCameraDirective = /** @class */ (function () {
    function IonCameraDirective(_camera, _webview) {
        this._camera = _camera;
        this._webview = _webview;
        this.cameraResult = new EventEmitter();
    }
    IonCameraDirective.prototype.onCameraElementClicked = function (event) {
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
    };
    IonCameraDirective.prototype.cameraAction = function (option) {
        return __awaiter(this, void 0, void 0, function () {
            var result, blobUrl, blob, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, this._camera.getPicture(option)];
                    case 1:
                        result = _a.sent();
                        if (!(this.config.outputResult === 'blob')) return [3 /*break*/, 3];
                        blobUrl = this._webview.convertFileSrc(result);
                        return [4 /*yield*/, fetch(blobUrl).then(function (r) { return r.blob(); })];
                    case 2:
                        blob = _a.sent();
                        this.cameraResult.emit(blob);
                        return [3 /*break*/, 4];
                    case 3:
                        this.cameraResult.emit(result);
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        e_1 = _a.sent();
                        console.log(e_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    IonCameraDirective.ctorParameters = function () { return [
        { type: Camera },
        { type: WebView }
    ]; };
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
    return IonCameraDirective;
}());

var IonCameraModule = /** @class */ (function () {
    function IonCameraModule() {
    }
    IonCameraModule = __decorate([
        NgModule({
            declarations: [IonCameraDirective],
            imports: [],
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

export { IonCameraDirective, IonCameraModule };
//# sourceMappingURL=indraraj26-ion-camera.js.map
