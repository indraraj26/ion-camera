import { __awaiter, __decorate, __generator } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Camera } from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@ionic-native/camera/ngx/index";
import * as i3 from "@ionic-native/ionic-webview/ngx/index";
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
    IonCameraService.ɵprov = i0.ɵɵdefineInjectable({ factory: function IonCameraService_Factory() { return new IonCameraService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.Camera), i0.ɵɵinject(i3.WebView)); }, token: IonCameraService, providedIn: "root" });
    IonCameraService = __decorate([
        Injectable({ providedIn: 'root' })
    ], IonCameraService);
    return IonCameraService;
}());
export { IonCameraService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLWNhbXJhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW5kcmFyYWoyNi9pb24tY2FtZXJhLyIsInNvdXJjZXMiOlsic3JjL2lvbi1jYW1yYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7OztBQUkxRDtJQUNDLDBCQUNTLFdBQXVCLEVBQ3ZCLE9BQWUsRUFDZixRQUFpQjtRQUZqQixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YsYUFBUSxHQUFSLFFBQVEsQ0FBUztJQUN2QixDQUFDO0lBRUUsdUNBQVksR0FBbEIsVUFBbUIsTUFBZTs7Ozs7Ozt3QkFFakIscUJBQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUE7O3dCQUE5QyxNQUFNLEdBQUcsU0FBcUM7NkJBQ2hELENBQUEsTUFBTSxDQUFDLGVBQWUsS0FBSyxDQUFDLENBQUEsRUFBNUIsd0JBQTRCO3dCQUN6QixPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBQ3hDLHFCQUFNLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQVIsQ0FBUSxDQUFDLEVBQUE7O3dCQUFqRCxJQUFJLEdBQUcsU0FBMEM7d0JBQ3ZELHNCQUFPLElBQUksRUFBQzs0QkFFYixzQkFBTyxNQUFNLEVBQUM7Ozt3QkFFZCxJQUFJLEdBQUMsS0FBSyxtQkFBbUIsRUFBRTs0QkFDOUIsc0JBQU8sR0FBQyxFQUFDO3lCQUNUO3dCQUNELHNCQUFPLGVBQWUsRUFBQzs7Ozs7S0FFeEI7O2dCQXBCcUIsVUFBVTtnQkFDZCxNQUFNO2dCQUNMLE9BQU87OztJQUpkLGdCQUFnQjtRQUQ1QixVQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7T0FDdEIsZ0JBQWdCLENBdUI1QjsyQkEvQkQ7Q0ErQkMsQUF2QkQsSUF1QkM7U0F2QlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgQ2FtZXJhIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jYW1lcmEvbmd4JztcclxuaW1wb3J0IHsgV2ViVmlldyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvaW9uaWMtd2Vidmlldy9uZ3gnO1xyXG5pbXBvcnQgeyBJQ29uZmlnIH0gZnJvbSAnLi9jb25maWcuaW50ZXJmYWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBJb25DYW1lcmFTZXJ2aWNlIHtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgX2h0dHBDbGllbnQ6IEh0dHBDbGllbnQsXHJcblx0XHRwcml2YXRlIF9jYW1lcmE6IENhbWVyYSxcclxuXHRcdHByaXZhdGUgX3dlYnZpZXc6IFdlYlZpZXcsXHJcblx0KSB7fVxyXG5cclxuXHRhc3luYyBjYW1lcmFBY3Rpb24ob3B0aW9uOiBJQ29uZmlnKSB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLl9jYW1lcmEuZ2V0UGljdHVyZShvcHRpb24pO1xyXG5cdFx0XHRpZiAob3B0aW9uLmRlc3RpbmF0aW9uVHlwZSA9PT0gMSkge1xyXG5cdFx0XHRcdGNvbnN0IGJsb2JVcmwgPSB0aGlzLl93ZWJ2aWV3LmNvbnZlcnRGaWxlU3JjKHJlc3VsdCk7XHJcblx0XHRcdFx0Y29uc3QgYmxvYiA9IGF3YWl0IGZldGNoKGJsb2JVcmwpLnRoZW4oKHIpID0+IHIuYmxvYigpKTtcclxuXHRcdFx0XHRyZXR1cm4gYmxvYjtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRpZiAoZSA9PT0gJ05vIEltYWdlIFNlbGVjdGVkJykge1xyXG5cdFx0XHRcdHJldHVybiBlO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiAnbm8tcGVybWlzc2lvbic7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiJdfQ==