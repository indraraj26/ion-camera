import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Camera } from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@ionic-native/camera/ngx/index";
import * as i3 from "@ionic-native/ionic-webview/ngx/index";
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
                    const blob = yield fetch(blobUrl).then((r) => r.blob());
                    return blob;
                }
                return result;
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
IonCameraService.ɵprov = i0.ɵɵdefineInjectable({ factory: function IonCameraService_Factory() { return new IonCameraService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.Camera), i0.ɵɵinject(i3.WebView)); }, token: IonCameraService, providedIn: "root" });
IonCameraService = __decorate([
    Injectable({ providedIn: 'root' })
], IonCameraService);
export { IonCameraService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLWNhbWVyYS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGluZHJhcmFqMjYvaW9uLWNhbWVyYS8iLCJzb3VyY2VzIjpbInNyYy9pb24tY2FtZXJhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0saUNBQWlDLENBQUM7Ozs7O0FBSTFELElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0lBQzVCLFlBQ1MsV0FBdUIsRUFDdkIsT0FBZSxFQUNmLFFBQWlCO1FBRmpCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3ZCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixhQUFRLEdBQVIsUUFBUSxDQUFTO0lBQ3ZCLENBQUM7SUFFRSxZQUFZLENBQUMsTUFBZTs7WUFDakMsSUFBSTtnQkFDSCxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNyRCxJQUFJLE1BQU0sQ0FBQyxlQUFlLEtBQUssQ0FBQyxFQUFFO29CQUNqQyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDckQsTUFBTSxJQUFJLEdBQUcsTUFBTSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztvQkFDeEQsT0FBTyxJQUFJLENBQUM7aUJBQ1o7Z0JBQ0QsT0FBTyxNQUFNLENBQUM7YUFDZDtZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNYLElBQUksQ0FBQyxLQUFLLG1CQUFtQixFQUFFO29CQUM5QixPQUFPLENBQUMsQ0FBQztpQkFDVDtnQkFDRCxPQUFPLGVBQWUsQ0FBQzthQUN2QjtRQUNGLENBQUM7S0FBQTtDQUNELENBQUE7O1lBckJzQixVQUFVO1lBQ2QsTUFBTTtZQUNMLE9BQU87OztBQUpkLGdCQUFnQjtJQUQ1QixVQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7R0FDdEIsZ0JBQWdCLENBdUI1QjtTQXZCWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBDYW1lcmEgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NhbWVyYS9uZ3gnO1xyXG5pbXBvcnQgeyBXZWJWaWV3IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9pb25pYy13ZWJ2aWV3L25neCc7XHJcbmltcG9ydCB7IElDb25maWcgfSBmcm9tICcuL2NvbmZpZy5pbnRlcmZhY2UnO1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIElvbkNhbWVyYVNlcnZpY2Uge1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBfaHR0cENsaWVudDogSHR0cENsaWVudCxcclxuXHRcdHByaXZhdGUgX2NhbWVyYTogQ2FtZXJhLFxyXG5cdFx0cHJpdmF0ZSBfd2VidmlldzogV2ViVmlldyxcclxuXHQpIHt9XHJcblxyXG5cdGFzeW5jIGNhbWVyYUFjdGlvbihvcHRpb246IElDb25maWcpIHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuX2NhbWVyYS5nZXRQaWN0dXJlKG9wdGlvbik7XHJcblx0XHRcdGlmIChvcHRpb24uZGVzdGluYXRpb25UeXBlID09PSAxKSB7XHJcblx0XHRcdFx0Y29uc3QgYmxvYlVybCA9IHRoaXMuX3dlYnZpZXcuY29udmVydEZpbGVTcmMocmVzdWx0KTtcclxuXHRcdFx0XHRjb25zdCBibG9iID0gYXdhaXQgZmV0Y2goYmxvYlVybCkudGhlbigocikgPT4gci5ibG9iKCkpO1xyXG5cdFx0XHRcdHJldHVybiBibG9iO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdGlmIChlID09PSAnTm8gSW1hZ2UgU2VsZWN0ZWQnKSB7XHJcblx0XHRcdFx0cmV0dXJuIGU7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuICduby1wZXJtaXNzaW9uJztcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIl19