import { __awaiter, __decorate } from 'tslib';
import { EventEmitter, Input, Output, HostListener, Directive, NgModule } from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@ionic-native/camera/ngx';
import * as ɵngcc2 from '@ionic-native/ionic-webview/ngx';
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
IonCameraDirective.ɵfac = function IonCameraDirective_Factory(t) { return new (t || IonCameraDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Camera), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.WebView)); };
IonCameraDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: IonCameraDirective, selectors: [["", "appIonCamera", ""]], hostBindings: function IonCameraDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function IonCameraDirective_click_HostBindingHandler($event) { return ctx.onCameraElementClicked($event); });
    } }, inputs: { config: "config" }, outputs: { cameraResult: "cameraResult" } });
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

let IonCameraModule = class IonCameraModule {
};
IonCameraModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: IonCameraModule });
IonCameraModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function IonCameraModule_Factory(t) { return new (t || IonCameraModule)(); }, providers: [Camera, WebView], imports: [[]] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(IonCameraDirective, [{
        type: Directive,
        args: [{
                selector: '[appIonCamera]'
            }]
    }], function () { return [{ type: ɵngcc1.Camera }, { type: ɵngcc2.WebView }]; }, { cameraResult: [{
            type: Output
        }], onCameraElementClicked: [{
            type: HostListener,
            args: ['click', ['$event']]
        }], config: [{
            type: Input
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(IonCameraModule, { declarations: [IonCameraDirective], exports: [IonCameraDirective] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(IonCameraModule, [{
        type: NgModule,
        args: [{
                declarations: [IonCameraDirective],
                imports: [],
                exports: [IonCameraDirective],
                providers: [Camera, WebView]
            }]
    }], null, null); })();

/*
 * Public API Surface of ion-camera
 */

/**
 * Generated bundle index. Do not edit.
 */

export { IonCameraDirective, IonCameraModule };

//# sourceMappingURL=ion-camera.js.map