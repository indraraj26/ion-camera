import { __awaiter, __decorate, __generator } from "tslib";
import { Directive, HostListener, Input, Output, EventEmitter, } from '@angular/core';
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
export { IonCameraDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLWNhbWVyYS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pb24tY2FtZXJhLyIsInNvdXJjZXMiOlsic3JjL2lvbi1jYW1lcmEuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ04sU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksR0FDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFbEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBSzFEO0lBc0JDLDRCQUFvQixPQUFlLEVBQVUsUUFBaUI7UUFBMUMsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVM7UUFwQnBELGlCQUFZLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUFvQkUsQ0FBQztJQWxCL0IsbURBQXNCLEdBQXRCLFVBQXVCLEtBQVk7UUFDckUsSUFDQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksS0FBSyxNQUFNO1lBQ25DLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFDcEM7WUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMvQjthQUFNLElBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEtBQUssUUFBUTtZQUNyQyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQ3BDO1lBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDL0I7YUFBTTtZQUNOLE1BQU0sSUFBSSxLQUFLLENBQ2Qsb0VBQW9FLENBQ3BFLENBQUM7U0FDRjtJQUNGLENBQUM7SUFJYSx5Q0FBWSxHQUExQixVQUEyQixNQUFlOzs7Ozs7O3dCQUV6QixxQkFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBQTs7d0JBQTlDLE1BQU0sR0FBRyxTQUFxQzs2QkFDaEQsQ0FBQSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksS0FBSyxNQUFNLENBQUEsRUFBbkMsd0JBQW1DO3dCQUNoQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBQ3hDLHFCQUFNLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQVIsQ0FBUSxDQUFDLEVBQUE7O3dCQUFqRCxJQUFJLEdBQUcsU0FBMEM7d0JBQ3ZELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOzs7d0JBRTdCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDOzs7Ozt3QkFHaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFDLENBQUMsQ0FBQzs7Ozs7O0tBRWhCOztnQkFmNEIsTUFBTTtnQkFBb0IsT0FBTzs7SUFyQnJEO1FBQVIsS0FBSyxFQUFFO3NEQUFpQjtJQUNmO1FBQVQsTUFBTSxFQUFFOzREQUFzRDtJQUU1QjtRQUFsQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7b0VBZ0JqQztJQXBCVyxrQkFBa0I7UUFIOUIsU0FBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLGdCQUFnQjtTQUMxQixDQUFDO09BQ1csa0JBQWtCLENBc0M5QjtJQUFELHlCQUFDO0NBQUEsQUF0Q0QsSUFzQ0M7U0F0Q1ksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuXHREaXJlY3RpdmUsXHJcblx0SG9zdExpc3RlbmVyLFxyXG5cdElucHV0LFxyXG5cdE91dHB1dCxcclxuXHRFdmVudEVtaXR0ZXIsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENhbWVyYSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY2FtZXJhL25neCc7XHJcbmltcG9ydCB7IElDb25maWcgfSBmcm9tICcuL2NvbmZpZy5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBXZWJWaWV3IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9pb25pYy13ZWJ2aWV3L25neCc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuXHRzZWxlY3RvcjogJ1thcHBJb25DYW1lcmFdJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIElvbkNhbWVyYURpcmVjdGl2ZSB7XHJcblx0QElucHV0KCkgY29uZmlnOiBJQ29uZmlnO1xyXG5cdEBPdXRwdXQoKSBjYW1lcmFSZXN1bHQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuXHRASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pIG9uQ2FtZXJhRWxlbWVudENsaWNrZWQoZXZlbnQ6IEV2ZW50KSB7XHJcblx0XHRpZiAoXHJcblx0XHRcdHRoaXMuY29uZmlnLm91dHB1dFJlc3VsdCA9PT0gJ2Jsb2InICYmXHJcblx0XHRcdHRoaXMuX2NhbWVyYS5EZXN0aW5hdGlvblR5cGUuRklMRV9VUklcclxuXHRcdCkge1xyXG5cdFx0XHR0aGlzLmNhbWVyYUFjdGlvbih0aGlzLmNvbmZpZyk7XHJcblx0XHR9IGVsc2UgaWYgKFxyXG5cdFx0XHR0aGlzLmNvbmZpZy5vdXRwdXRSZXN1bHQgPT09ICdiYXNlNjQnICYmXHJcblx0XHRcdHRoaXMuX2NhbWVyYS5EZXN0aW5hdGlvblR5cGUuREFUQV9VUkxcclxuXHRcdCkge1xyXG5cdFx0XHR0aGlzLmNhbWVyYUFjdGlvbih0aGlzLmNvbmZpZyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXHJcblx0XHRcdFx0J1RoaXMgbWV0aG9kIGlzIG5vdCB5ZXQgaW1wbG1lbnRlZCEgZWl0aGVyIHVzZSBEQVRBX1VSTCBvciBGSUxFX1VSSScsXHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9jYW1lcmE6IENhbWVyYSwgcHJpdmF0ZSBfd2VidmlldzogV2ViVmlldykge31cclxuXHJcblx0cHJpdmF0ZSBhc3luYyBjYW1lcmFBY3Rpb24ob3B0aW9uOiBJQ29uZmlnKSB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLl9jYW1lcmEuZ2V0UGljdHVyZShvcHRpb24pO1xyXG5cdFx0XHRpZiAodGhpcy5jb25maWcub3V0cHV0UmVzdWx0ID09PSAnYmxvYicpIHtcclxuXHRcdFx0XHRjb25zdCBibG9iVXJsID0gdGhpcy5fd2Vidmlldy5jb252ZXJ0RmlsZVNyYyhyZXN1bHQpO1xyXG5cdFx0XHRcdGNvbnN0IGJsb2IgPSBhd2FpdCBmZXRjaChibG9iVXJsKS50aGVuKChyKSA9PiByLmJsb2IoKSk7XHJcblx0XHRcdFx0dGhpcy5jYW1lcmFSZXN1bHQuZW1pdChibG9iKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLmNhbWVyYVJlc3VsdC5lbWl0KHJlc3VsdCk7XHJcblx0XHRcdH1cclxuXHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coZSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiJdfQ==