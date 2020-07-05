import { __awaiter, __decorate } from "tslib";
import { HttpClient } from '@angular/common/http';
import { Camera } from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Injectable } from '@angular/core';
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
export { IonCameraService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLWNhbWVyYS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGluZHJhcmFqMjYvaW9uLWNhbWVyYS8iLCJzb3VyY2VzIjpbInNyYy9pb24tY2FtZXJhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRTFELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7SUFDNUIsWUFDUyxXQUF1QixFQUN2QixPQUFlLEVBQ2YsUUFBaUI7UUFGakIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLGFBQVEsR0FBUixRQUFRLENBQVM7SUFDdkIsQ0FBQztJQUVFLFlBQVksQ0FBQyxNQUFlOztZQUNqQyxJQUFJO2dCQUNILE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3JELElBQUksTUFBTSxDQUFDLGVBQWUsS0FBSyxDQUFDLEVBQUU7b0JBQ2pDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUNyRCxNQUFNLElBQUksR0FBRyxDQUFDLE1BQU0sS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQzdDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FDUixDQUFTLENBQUM7b0JBQ1gsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxDQUFDO2lCQUMzQztnQkFDRCxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUM7YUFDbEI7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDWCxJQUFJLENBQUMsS0FBSyxtQkFBbUIsRUFBRTtvQkFDOUIsT0FBTyxDQUFDLENBQUM7aUJBQ1Q7Z0JBQ0QsT0FBTyxlQUFlLENBQUM7YUFDdkI7UUFDRixDQUFDO0tBQUE7Q0FDRCxDQUFBOztZQXZCc0IsVUFBVTtZQUNkLE1BQU07WUFDTCxPQUFPOztBQUpkLGdCQUFnQjtJQUQ1QixVQUFVLEVBQUU7R0FDQSxnQkFBZ0IsQ0F5QjVCO1NBekJZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IENhbWVyYSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY2FtZXJhL25neCc7XHJcbmltcG9ydCB7IFdlYlZpZXcgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2lvbmljLXdlYnZpZXcvbmd4JztcclxuaW1wb3J0IHsgSUNvbmZpZyB9IGZyb20gJy4vY29uZmlnLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSW9uQ2FtZXJhU2VydmljZSB7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIF9odHRwQ2xpZW50OiBIdHRwQ2xpZW50LFxyXG5cdFx0cHJpdmF0ZSBfY2FtZXJhOiBDYW1lcmEsXHJcblx0XHRwcml2YXRlIF93ZWJ2aWV3OiBXZWJWaWV3LFxyXG5cdCkge31cclxuXHJcblx0YXN5bmMgY2FtZXJhQWN0aW9uKG9wdGlvbjogSUNvbmZpZykge1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5fY2FtZXJhLmdldFBpY3R1cmUob3B0aW9uKTtcclxuXHRcdFx0aWYgKG9wdGlvbi5kZXN0aW5hdGlvblR5cGUgPT09IDEpIHtcclxuXHRcdFx0XHRjb25zdCBibG9iVXJsID0gdGhpcy5fd2Vidmlldy5jb252ZXJ0RmlsZVNyYyhyZXN1bHQpO1xyXG5cdFx0XHRcdGNvbnN0IGJsb2IgPSAoYXdhaXQgZmV0Y2goYmxvYlVybCkudGhlbigocikgPT5cclxuXHRcdFx0XHRcdHIuYmxvYigpLFxyXG5cdFx0XHRcdCkpIGFzIEJsb2I7XHJcblx0XHRcdFx0cmV0dXJuIHsgcmVzdWx0OiBibG9iLCBmaWxlUGF0aDogYmxvYlVybCB9O1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB7IHJlc3VsdCB9O1xyXG5cdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRpZiAoZSA9PT0gJ05vIEltYWdlIFNlbGVjdGVkJykge1xyXG5cdFx0XHRcdHJldHVybiBlO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiAnbm8tcGVybWlzc2lvbic7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiJdfQ==