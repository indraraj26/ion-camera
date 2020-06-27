import { __awaiter, __decorate, __generator } from "tslib";
import { Directive, HostListener, Input, Output, EventEmitter, } from '@angular/core';
import { IonCameraService } from './ion-camra.service';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLWNhbWVyYS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW5kcmFyYWoyNi9pb24tY2FtZXJhLyIsInNvdXJjZXMiOlsibGliL2lvbi1jYW1lcmEuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ04sU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksR0FDWixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUt2RDtJQWtCQyw0QkFBb0IsaUJBQW1DO1FBQW5DLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFoQjdDLGlCQUFZLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUFnQkwsQ0FBQztJQWR4QixtREFBc0IsR0FBdEIsVUFBdUIsS0FBWTtRQUNyRSxXQUFXO1FBQ1gsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsS0FBSyxDQUFDLEVBQUU7WUFDdEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDaEMsV0FBVztTQUNYO2FBQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsS0FBSyxDQUFDLEVBQUU7WUFDN0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDaEM7YUFBTTtZQUNOLE1BQU0sSUFBSSxLQUFLLENBQ2QsMEVBQTBFLENBQzFFLENBQUM7U0FDRjtJQUNGLENBQUM7SUFJSywwQ0FBYSxHQUFuQixVQUFvQixNQUFlOzs7Ozs0QkFDbkIscUJBQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBQTs7d0JBQTFELE1BQU0sR0FBRyxTQUFpRDt3QkFDaEUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Ozs7O0tBQy9COztnQkFMc0MsZ0JBQWdCOztJQWpCaEM7UUFBdEIsS0FBSyxDQUFDLGNBQWMsQ0FBQztzREFBaUI7SUFDN0I7UUFBVCxNQUFNLEVBQUU7NERBQXNEO0lBRTVCO1FBQWxDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztvRUFZakM7SUFoQlcsa0JBQWtCO1FBSDlCLFNBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxnQkFBZ0I7U0FDMUIsQ0FBQztPQUNXLGtCQUFrQixDQXdCOUI7SUFBRCx5QkFBQztDQUFBLEFBeEJELElBd0JDO1NBeEJZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcblx0RGlyZWN0aXZlLFxyXG5cdEhvc3RMaXN0ZW5lcixcclxuXHRJbnB1dCxcclxuXHRPdXRwdXQsXHJcblx0RXZlbnRFbWl0dGVyLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJQ29uZmlnIH0gZnJvbSAnLi9jb25maWcuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgSW9uQ2FtZXJhU2VydmljZSB9IGZyb20gJy4vaW9uLWNhbXJhLnNlcnZpY2UnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcblx0c2VsZWN0b3I6ICdbYXBwSW9uQ2FtZXJhXScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJb25DYW1lcmFEaXJlY3RpdmUge1xyXG5cdEBJbnB1dCgnYXBwSW9uQ2FtZXJhJykgY29uZmlnOiBJQ29uZmlnO1xyXG5cdEBPdXRwdXQoKSBjYW1lcmFSZXN1bHQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuXHRASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pIG9uQ2FtZXJhRWxlbWVudENsaWNrZWQoZXZlbnQ6IEV2ZW50KSB7XHJcblx0XHQvLyBGaWxlIFVSSVxyXG5cdFx0aWYgKHRoaXMuY29uZmlnLmRlc3RpbmF0aW9uVHlwZSA9PT0gMSkge1xyXG5cdFx0XHR0aGlzLmdldENhbWVyYURhdGEodGhpcy5jb25maWcpO1xyXG5cdFx0XHQvLyBEYXRhIFVSTFxyXG5cdFx0fSBlbHNlIGlmICh0aGlzLmNvbmZpZy5kZXN0aW5hdGlvblR5cGUgPT09IDApIHtcclxuXHRcdFx0dGhpcy5nZXRDYW1lcmFEYXRhKHRoaXMuY29uZmlnKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcclxuXHRcdFx0XHQnVGhpcyBtZXRob2QgaXMgbm90IHlldCBpbXBsbWVudGVkISBlaXRoZXIgdXNlIERBVEFfVVJMKDApIG9yIEZJTEVfVVJJKDEpJyxcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX2lvbkNhbWVyYVNlcnZpY2U6IElvbkNhbWVyYVNlcnZpY2UpIHt9XHJcblxyXG5cdGFzeW5jIGdldENhbWVyYURhdGEob3B0aW9uOiBJQ29uZmlnKSB7XHJcblx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLl9pb25DYW1lcmFTZXJ2aWNlLmNhbWVyYUFjdGlvbihvcHRpb24pO1xyXG5cdFx0dGhpcy5jYW1lcmFSZXN1bHQuZW1pdChyZXN1bHQpO1xyXG5cdH1cclxufVxyXG4iXX0=