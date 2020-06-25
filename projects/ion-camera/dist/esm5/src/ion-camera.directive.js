import { __awaiter, __decorate, __generator } from "tslib";
import { Directive, HostListener, Input, Output, EventEmitter, } from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx';
import { IonCameraService } from './ion-camra.service';
var IonCameraDirective = /** @class */ (function () {
    function IonCameraDirective(_ionCameraService, _camera) {
        this._ionCameraService = _ionCameraService;
        this._camera = _camera;
        this.cameraResult = new EventEmitter();
    }
    IonCameraDirective.prototype.onCameraElementClicked = function (event) {
        if (this.config.outputType === 'blob' &&
            this._camera.DestinationType.FILE_URI) {
            this.getCameraData(this.config);
        }
        else if (this.config.outputType === 'base64' &&
            this._camera.DestinationType.DATA_URL) {
            this.getCameraData(this.config);
        }
        else {
            throw new Error('This method is not yet implmented! either use DATA_URL or FILE_URI');
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
        { type: IonCameraService },
        { type: Camera }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLWNhbWVyYS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW5kcmFyYWoyNi9pb24tY2FtZXJhLyIsInNvdXJjZXMiOlsic3JjL2lvbi1jYW1lcmEuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ04sU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksR0FDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFbEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFLdkQ7SUFzQkMsNEJBQ1MsaUJBQW1DLEVBQ25DLE9BQWU7UUFEZixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBQ25DLFlBQU8sR0FBUCxPQUFPLENBQVE7UUF0QmQsaUJBQVksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQXVCNUQsQ0FBQztJQXJCK0IsbURBQXNCLEdBQXRCLFVBQXVCLEtBQVk7UUFDckUsSUFDQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsS0FBSyxNQUFNO1lBQ2pDLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFDcEM7WUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNoQzthQUFNLElBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEtBQUssUUFBUTtZQUNuQyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQ3BDO1lBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDaEM7YUFBTTtZQUNOLE1BQU0sSUFBSSxLQUFLLENBQ2Qsb0VBQW9FLENBQ3BFLENBQUM7U0FDRjtJQUNGLENBQUM7SUFPSywwQ0FBYSxHQUFuQixVQUFvQixNQUFlOzs7Ozs0QkFDbkIscUJBQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBQTs7d0JBQTFELE1BQU0sR0FBRyxTQUFpRDt3QkFDaEUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Ozs7O0tBQy9COztnQkFQMkIsZ0JBQWdCO2dCQUMxQixNQUFNOztJQXZCRDtRQUF0QixLQUFLLENBQUMsY0FBYyxDQUFDO3NEQUFpQjtJQUM3QjtRQUFULE1BQU0sRUFBRTs0REFBc0Q7SUFFNUI7UUFBbEMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29FQWdCakM7SUFwQlcsa0JBQWtCO1FBSDlCLFNBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxnQkFBZ0I7U0FDMUIsQ0FBQztPQUNXLGtCQUFrQixDQStCOUI7SUFBRCx5QkFBQztDQUFBLEFBL0JELElBK0JDO1NBL0JZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcblx0RGlyZWN0aXZlLFxyXG5cdEhvc3RMaXN0ZW5lcixcclxuXHRJbnB1dCxcclxuXHRPdXRwdXQsXHJcblx0RXZlbnRFbWl0dGVyLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDYW1lcmEgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NhbWVyYS9uZ3gnO1xyXG5pbXBvcnQgeyBJQ29uZmlnIH0gZnJvbSAnLi9jb25maWcuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgSW9uQ2FtZXJhU2VydmljZSB9IGZyb20gJy4vaW9uLWNhbXJhLnNlcnZpY2UnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcblx0c2VsZWN0b3I6ICdbYXBwSW9uQ2FtZXJhXScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJb25DYW1lcmFEaXJlY3RpdmUge1xyXG5cdEBJbnB1dCgnYXBwSW9uQ2FtZXJhJykgY29uZmlnOiBJQ29uZmlnO1xyXG5cdEBPdXRwdXQoKSBjYW1lcmFSZXN1bHQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuXHRASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pIG9uQ2FtZXJhRWxlbWVudENsaWNrZWQoZXZlbnQ6IEV2ZW50KSB7XHJcblx0XHRpZiAoXHJcblx0XHRcdHRoaXMuY29uZmlnLm91dHB1dFR5cGUgPT09ICdibG9iJyAmJlxyXG5cdFx0XHR0aGlzLl9jYW1lcmEuRGVzdGluYXRpb25UeXBlLkZJTEVfVVJJXHJcblx0XHQpIHtcclxuXHRcdFx0dGhpcy5nZXRDYW1lcmFEYXRhKHRoaXMuY29uZmlnKTtcclxuXHRcdH0gZWxzZSBpZiAoXHJcblx0XHRcdHRoaXMuY29uZmlnLm91dHB1dFR5cGUgPT09ICdiYXNlNjQnICYmXHJcblx0XHRcdHRoaXMuX2NhbWVyYS5EZXN0aW5hdGlvblR5cGUuREFUQV9VUkxcclxuXHRcdCkge1xyXG5cdFx0XHR0aGlzLmdldENhbWVyYURhdGEodGhpcy5jb25maWcpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFxyXG5cdFx0XHRcdCdUaGlzIG1ldGhvZCBpcyBub3QgeWV0IGltcGxtZW50ZWQhIGVpdGhlciB1c2UgREFUQV9VUkwgb3IgRklMRV9VUkknLFxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIF9pb25DYW1lcmFTZXJ2aWNlOiBJb25DYW1lcmFTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBfY2FtZXJhOiBDYW1lcmEsXHJcblx0KSB7fVxyXG5cclxuXHRhc3luYyBnZXRDYW1lcmFEYXRhKG9wdGlvbjogSUNvbmZpZykge1xyXG5cdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5faW9uQ2FtZXJhU2VydmljZS5jYW1lcmFBY3Rpb24ob3B0aW9uKTtcclxuXHRcdHRoaXMuY2FtZXJhUmVzdWx0LmVtaXQocmVzdWx0KTtcclxuXHR9XHJcbn1cclxuIl19