import { __awaiter, __decorate, __generator } from "tslib";
import { Directive, HostListener, Input, Output, EventEmitter, } from '@angular/core';
import { IonCameraService } from './ion-camera.service';
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
export { IonCameraDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLWNhbWVyYS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW5kcmFyYWoyNi9pb24tY2FtZXJhLyIsInNvdXJjZXMiOlsic3JjL2lvbi1jYW1lcmEuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ04sU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksR0FDWixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUt4RDtJQWtCQyw0QkFBb0IsaUJBQW1DO1FBQW5DLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFoQjdDLGlCQUFZLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUFnQkwsQ0FBQztJQWR4QixtREFBc0IsR0FBdEIsVUFBdUIsS0FBWTtRQUNyRSxXQUFXO1FBQ1gsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsS0FBSyxDQUFDLEVBQUU7WUFDdEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDaEMsV0FBVztTQUNYO2FBQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsS0FBSyxDQUFDLEVBQUU7WUFDN0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDaEM7YUFBTTtZQUNOLE1BQU0sSUFBSSxLQUFLLENBQ2QsMEVBQTBFLENBQzFFLENBQUM7U0FDRjtJQUNGLENBQUM7SUFJSywwQ0FBYSxHQUFuQixVQUFvQixNQUFlOzs7Ozs0QkFDbkIscUJBQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBQTs7d0JBQTFELE1BQU0sR0FBRyxTQUFpRDt3QkFDaEUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Ozs7O0tBQy9COztnQkFMc0MsZ0JBQWdCOztJQWpCaEM7UUFBdEIsS0FBSyxDQUFDLGNBQWMsQ0FBQztzREFBaUI7SUFDN0I7UUFBVCxNQUFNLEVBQUU7NERBQXNEO0lBRTVCO1FBQWxDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztvRUFZakM7SUFoQlcsa0JBQWtCO1FBSDlCLFNBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxnQkFBZ0I7U0FDMUIsQ0FBQztPQUNXLGtCQUFrQixDQXdCOUI7SUFBRCx5QkFBQztDQUFBLEFBeEJELElBd0JDO1NBeEJZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcblx0RGlyZWN0aXZlLFxyXG5cdEhvc3RMaXN0ZW5lcixcclxuXHRJbnB1dCxcclxuXHRPdXRwdXQsXHJcblx0RXZlbnRFbWl0dGVyLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJQ29uZmlnIH0gZnJvbSAnLi9jb25maWcuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgSW9uQ2FtZXJhU2VydmljZSB9IGZyb20gJy4vaW9uLWNhbWVyYS5zZXJ2aWNlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG5cdHNlbGVjdG9yOiAnW2FwcElvbkNhbWVyYV0nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW9uQ2FtZXJhRGlyZWN0aXZlIHtcclxuXHRASW5wdXQoJ2FwcElvbkNhbWVyYScpIGNvbmZpZzogSUNvbmZpZztcclxuXHRAT3V0cHV0KCkgY2FtZXJhUmVzdWx0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcblx0QEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKSBvbkNhbWVyYUVsZW1lbnRDbGlja2VkKGV2ZW50OiBFdmVudCkge1xyXG5cdFx0Ly8gRmlsZSBVUklcclxuXHRcdGlmICh0aGlzLmNvbmZpZy5kZXN0aW5hdGlvblR5cGUgPT09IDEpIHtcclxuXHRcdFx0dGhpcy5nZXRDYW1lcmFEYXRhKHRoaXMuY29uZmlnKTtcclxuXHRcdFx0Ly8gRGF0YSBVUkxcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5jb25maWcuZGVzdGluYXRpb25UeXBlID09PSAwKSB7XHJcblx0XHRcdHRoaXMuZ2V0Q2FtZXJhRGF0YSh0aGlzLmNvbmZpZyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXHJcblx0XHRcdFx0J1RoaXMgbWV0aG9kIGlzIG5vdCB5ZXQgaW1wbG1lbnRlZCEgZWl0aGVyIHVzZSBEQVRBX1VSTCgwKSBvciBGSUxFX1VSSSgxKScsXHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9pb25DYW1lcmFTZXJ2aWNlOiBJb25DYW1lcmFTZXJ2aWNlKSB7fVxyXG5cclxuXHRhc3luYyBnZXRDYW1lcmFEYXRhKG9wdGlvbjogSUNvbmZpZykge1xyXG5cdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5faW9uQ2FtZXJhU2VydmljZS5jYW1lcmFBY3Rpb24ob3B0aW9uKTtcclxuXHRcdHRoaXMuY2FtZXJhUmVzdWx0LmVtaXQocmVzdWx0KTtcclxuXHR9XHJcbn1cclxuIl19