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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLWNhbWVyYS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGluZHJhcmFqMjYvaW9uLWNhbWVyYS8iLCJzb3VyY2VzIjpbInNyYy9pb24tY2FtZXJhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0saUNBQWlDLENBQUM7Ozs7O0FBSTFEO0lBQ0MsMEJBQ1MsV0FBdUIsRUFDdkIsT0FBZSxFQUNmLFFBQWlCO1FBRmpCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3ZCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixhQUFRLEdBQVIsUUFBUSxDQUFTO0lBQ3ZCLENBQUM7SUFFRSx1Q0FBWSxHQUFsQixVQUFtQixNQUFlOzs7Ozs7O3dCQUVqQixxQkFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBQTs7d0JBQTlDLE1BQU0sR0FBRyxTQUFxQzs2QkFDaEQsQ0FBQSxNQUFNLENBQUMsZUFBZSxLQUFLLENBQUMsQ0FBQSxFQUE1Qix3QkFBNEI7d0JBQ3pCLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDeEMscUJBQU0sS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBUixDQUFRLENBQUMsRUFBQTs7d0JBQWpELElBQUksR0FBRyxTQUEwQzt3QkFDdkQsc0JBQU8sSUFBSSxFQUFDOzRCQUViLHNCQUFPLE1BQU0sRUFBQzs7O3dCQUVkLElBQUksR0FBQyxLQUFLLG1CQUFtQixFQUFFOzRCQUM5QixzQkFBTyxHQUFDLEVBQUM7eUJBQ1Q7d0JBQ0Qsc0JBQU8sZUFBZSxFQUFDOzs7OztLQUV4Qjs7Z0JBcEJxQixVQUFVO2dCQUNkLE1BQU07Z0JBQ0wsT0FBTzs7O0lBSmQsZ0JBQWdCO1FBRDVCLFVBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQztPQUN0QixnQkFBZ0IsQ0F1QjVCOzJCQS9CRDtDQStCQyxBQXZCRCxJQXVCQztTQXZCWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBDYW1lcmEgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NhbWVyYS9uZ3gnO1xyXG5pbXBvcnQgeyBXZWJWaWV3IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9pb25pYy13ZWJ2aWV3L25neCc7XHJcbmltcG9ydCB7IElDb25maWcgfSBmcm9tICcuL2NvbmZpZy5pbnRlcmZhY2UnO1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIElvbkNhbWVyYVNlcnZpY2Uge1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBfaHR0cENsaWVudDogSHR0cENsaWVudCxcclxuXHRcdHByaXZhdGUgX2NhbWVyYTogQ2FtZXJhLFxyXG5cdFx0cHJpdmF0ZSBfd2VidmlldzogV2ViVmlldyxcclxuXHQpIHt9XHJcblxyXG5cdGFzeW5jIGNhbWVyYUFjdGlvbihvcHRpb246IElDb25maWcpIHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuX2NhbWVyYS5nZXRQaWN0dXJlKG9wdGlvbik7XHJcblx0XHRcdGlmIChvcHRpb24uZGVzdGluYXRpb25UeXBlID09PSAxKSB7XHJcblx0XHRcdFx0Y29uc3QgYmxvYlVybCA9IHRoaXMuX3dlYnZpZXcuY29udmVydEZpbGVTcmMocmVzdWx0KTtcclxuXHRcdFx0XHRjb25zdCBibG9iID0gYXdhaXQgZmV0Y2goYmxvYlVybCkudGhlbigocikgPT4gci5ibG9iKCkpO1xyXG5cdFx0XHRcdHJldHVybiBibG9iO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdGlmIChlID09PSAnTm8gSW1hZ2UgU2VsZWN0ZWQnKSB7XHJcblx0XHRcdFx0cmV0dXJuIGU7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuICduby1wZXJtaXNzaW9uJztcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIl19