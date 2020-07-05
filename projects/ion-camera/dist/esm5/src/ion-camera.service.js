import { __awaiter, __decorate, __generator } from "tslib";
import { HttpClient } from '@angular/common/http';
import { Camera } from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Injectable } from '@angular/core';
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
                        return [4 /*yield*/, fetch(blobUrl).then(function (r) {
                                return r.blob();
                            })];
                    case 2:
                        blob = (_a.sent());
                        return [2 /*return*/, { result: blob, filePath: blobUrl }];
                    case 3: return [2 /*return*/, { result: result }];
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
    IonCameraService = __decorate([
        Injectable()
    ], IonCameraService);
    return IonCameraService;
}());
export { IonCameraService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLWNhbWVyYS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGluZHJhcmFqMjYvaW9uLWNhbWVyYS8iLCJzb3VyY2VzIjpbInNyYy9pb24tY2FtZXJhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRTFELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0M7SUFDQywwQkFDUyxXQUF1QixFQUN2QixPQUFlLEVBQ2YsUUFBaUI7UUFGakIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLGFBQVEsR0FBUixRQUFRLENBQVM7SUFDdkIsQ0FBQztJQUVFLHVDQUFZLEdBQWxCLFVBQW1CLE1BQWU7Ozs7Ozs7d0JBRWpCLHFCQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFBOzt3QkFBOUMsTUFBTSxHQUFHLFNBQXFDOzZCQUNoRCxDQUFBLE1BQU0sQ0FBQyxlQUFlLEtBQUssQ0FBQyxDQUFBLEVBQTVCLHdCQUE0Qjt3QkFDekIsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUN2QyxxQkFBTSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQztnQ0FDekMsT0FBQSxDQUFDLENBQUMsSUFBSSxFQUFFOzRCQUFSLENBQVEsQ0FDUixFQUFBOzt3QkFGSyxJQUFJLEdBQUcsQ0FBQyxTQUViLENBQVM7d0JBQ1Ysc0JBQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsRUFBQzs0QkFFNUMsc0JBQU8sRUFBRSxNQUFNLFFBQUEsRUFBRSxFQUFDOzs7d0JBRWxCLElBQUksR0FBQyxLQUFLLG1CQUFtQixFQUFFOzRCQUM5QixzQkFBTyxHQUFDLEVBQUM7eUJBQ1Q7d0JBQ0Qsc0JBQU8sZUFBZSxFQUFDOzs7OztLQUV4Qjs7Z0JBdEJxQixVQUFVO2dCQUNkLE1BQU07Z0JBQ0wsT0FBTzs7SUFKZCxnQkFBZ0I7UUFENUIsVUFBVSxFQUFFO09BQ0EsZ0JBQWdCLENBeUI1QjtJQUFELHVCQUFDO0NBQUEsQUF6QkQsSUF5QkM7U0F6QlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgQ2FtZXJhIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jYW1lcmEvbmd4JztcclxuaW1wb3J0IHsgV2ViVmlldyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvaW9uaWMtd2Vidmlldy9uZ3gnO1xyXG5pbXBvcnQgeyBJQ29uZmlnIH0gZnJvbSAnLi9jb25maWcuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBJb25DYW1lcmFTZXJ2aWNlIHtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgX2h0dHBDbGllbnQ6IEh0dHBDbGllbnQsXHJcblx0XHRwcml2YXRlIF9jYW1lcmE6IENhbWVyYSxcclxuXHRcdHByaXZhdGUgX3dlYnZpZXc6IFdlYlZpZXcsXHJcblx0KSB7fVxyXG5cclxuXHRhc3luYyBjYW1lcmFBY3Rpb24ob3B0aW9uOiBJQ29uZmlnKSB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLl9jYW1lcmEuZ2V0UGljdHVyZShvcHRpb24pO1xyXG5cdFx0XHRpZiAob3B0aW9uLmRlc3RpbmF0aW9uVHlwZSA9PT0gMSkge1xyXG5cdFx0XHRcdGNvbnN0IGJsb2JVcmwgPSB0aGlzLl93ZWJ2aWV3LmNvbnZlcnRGaWxlU3JjKHJlc3VsdCk7XHJcblx0XHRcdFx0Y29uc3QgYmxvYiA9IChhd2FpdCBmZXRjaChibG9iVXJsKS50aGVuKChyKSA9PlxyXG5cdFx0XHRcdFx0ci5ibG9iKCksXHJcblx0XHRcdFx0KSkgYXMgQmxvYjtcclxuXHRcdFx0XHRyZXR1cm4geyByZXN1bHQ6IGJsb2IsIGZpbGVQYXRoOiBibG9iVXJsIH07XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHsgcmVzdWx0IH07XHJcblx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdGlmIChlID09PSAnTm8gSW1hZ2UgU2VsZWN0ZWQnKSB7XHJcblx0XHRcdFx0cmV0dXJuIGU7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuICduby1wZXJtaXNzaW9uJztcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIl19