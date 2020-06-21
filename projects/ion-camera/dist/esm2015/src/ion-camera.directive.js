import { __awaiter, __decorate } from "tslib";
import { Directive, HostListener, Input, Output, EventEmitter, } from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
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
IonCameraDirective = __decorate([
    Directive({
        selector: '[appIonCamera]',
    })
], IonCameraDirective);
export { IonCameraDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLWNhbWVyYS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW5kcmFyYWoyNi9pb24tY2FtZXJhLyIsInNvdXJjZXMiOlsic3JjL2lvbi1jYW1lcmEuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ04sU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksR0FDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFbEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBSzFELElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQWtCO0lBc0I5QixZQUFvQixPQUFlLEVBQVUsUUFBaUI7UUFBMUMsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVM7UUFwQnBELGlCQUFZLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUFvQkUsQ0FBQztJQWxCL0Isc0JBQXNCLENBQUMsS0FBWTtRQUNyRSxJQUNDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxLQUFLLE1BQU07WUFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUNwQztZQUNELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQy9CO2FBQU0sSUFDTixJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksS0FBSyxRQUFRO1lBQ3JDLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFDcEM7WUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMvQjthQUFNO1lBQ04sTUFBTSxJQUFJLEtBQUssQ0FDZCxvRUFBb0UsQ0FDcEUsQ0FBQztTQUNGO0lBQ0YsQ0FBQztJQUlhLFlBQVksQ0FBQyxNQUFlOztZQUN6QyxJQUFJO2dCQUNILE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3JELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEtBQUssTUFBTSxFQUFFO29CQUN4QyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDckQsTUFBTSxJQUFJLEdBQUcsTUFBTSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztvQkFDeEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQzdCO3FCQUFNO29CQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUMvQjthQUNEO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNmO1FBQ0YsQ0FBQztLQUFBO0NBQ0QsQ0FBQTs7WUFoQjZCLE1BQU07WUFBb0IsT0FBTzs7QUFyQnJEO0lBQVIsS0FBSyxFQUFFO2tEQUFpQjtBQUNmO0lBQVQsTUFBTSxFQUFFO3dEQUFzRDtBQUU1QjtJQUFsQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7Z0VBZ0JqQztBQXBCVyxrQkFBa0I7SUFIOUIsU0FBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLGdCQUFnQjtLQUMxQixDQUFDO0dBQ1csa0JBQWtCLENBc0M5QjtTQXRDWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG5cdERpcmVjdGl2ZSxcclxuXHRIb3N0TGlzdGVuZXIsXHJcblx0SW5wdXQsXHJcblx0T3V0cHV0LFxyXG5cdEV2ZW50RW1pdHRlcixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2FtZXJhIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jYW1lcmEvbmd4JztcclxuaW1wb3J0IHsgSUNvbmZpZyB9IGZyb20gJy4vY29uZmlnLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFdlYlZpZXcgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2lvbmljLXdlYnZpZXcvbmd4JztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG5cdHNlbGVjdG9yOiAnW2FwcElvbkNhbWVyYV0nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW9uQ2FtZXJhRGlyZWN0aXZlIHtcclxuXHRASW5wdXQoKSBjb25maWc6IElDb25maWc7XHJcblx0QE91dHB1dCgpIGNhbWVyYVJlc3VsdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG5cdEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSkgb25DYW1lcmFFbGVtZW50Q2xpY2tlZChldmVudDogRXZlbnQpIHtcclxuXHRcdGlmIChcclxuXHRcdFx0dGhpcy5jb25maWcub3V0cHV0UmVzdWx0ID09PSAnYmxvYicgJiZcclxuXHRcdFx0dGhpcy5fY2FtZXJhLkRlc3RpbmF0aW9uVHlwZS5GSUxFX1VSSVxyXG5cdFx0KSB7XHJcblx0XHRcdHRoaXMuY2FtZXJhQWN0aW9uKHRoaXMuY29uZmlnKTtcclxuXHRcdH0gZWxzZSBpZiAoXHJcblx0XHRcdHRoaXMuY29uZmlnLm91dHB1dFJlc3VsdCA9PT0gJ2Jhc2U2NCcgJiZcclxuXHRcdFx0dGhpcy5fY2FtZXJhLkRlc3RpbmF0aW9uVHlwZS5EQVRBX1VSTFxyXG5cdFx0KSB7XHJcblx0XHRcdHRoaXMuY2FtZXJhQWN0aW9uKHRoaXMuY29uZmlnKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcclxuXHRcdFx0XHQnVGhpcyBtZXRob2QgaXMgbm90IHlldCBpbXBsbWVudGVkISBlaXRoZXIgdXNlIERBVEFfVVJMIG9yIEZJTEVfVVJJJyxcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX2NhbWVyYTogQ2FtZXJhLCBwcml2YXRlIF93ZWJ2aWV3OiBXZWJWaWV3KSB7fVxyXG5cclxuXHRwcml2YXRlIGFzeW5jIGNhbWVyYUFjdGlvbihvcHRpb246IElDb25maWcpIHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuX2NhbWVyYS5nZXRQaWN0dXJlKG9wdGlvbik7XHJcblx0XHRcdGlmICh0aGlzLmNvbmZpZy5vdXRwdXRSZXN1bHQgPT09ICdibG9iJykge1xyXG5cdFx0XHRcdGNvbnN0IGJsb2JVcmwgPSB0aGlzLl93ZWJ2aWV3LmNvbnZlcnRGaWxlU3JjKHJlc3VsdCk7XHJcblx0XHRcdFx0Y29uc3QgYmxvYiA9IGF3YWl0IGZldGNoKGJsb2JVcmwpLnRoZW4oKHIpID0+IHIuYmxvYigpKTtcclxuXHRcdFx0XHR0aGlzLmNhbWVyYVJlc3VsdC5lbWl0KGJsb2IpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuY2FtZXJhUmVzdWx0LmVtaXQocmVzdWx0KTtcclxuXHRcdFx0fVxyXG5cdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhlKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIl19