import { __awaiter, __decorate } from "tslib";
import { Directive, HostListener, Input, Output, EventEmitter, } from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx';
import { IonCameraService } from './ion-camra.service';
let IonCameraDirective = class IonCameraDirective {
    constructor(_ionCameraService, _camera) {
        this._ionCameraService = _ionCameraService;
        this._camera = _camera;
        this.cameraResult = new EventEmitter();
    }
    onCameraElementClicked(event) {
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
    }
    getCameraData(option) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._ionCameraService.cameraAction(option);
            this.cameraResult.emit(result);
        });
    }
};
IonCameraDirective.ctorParameters = () => [
    { type: IonCameraService },
    { type: Camera }
];
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
export { IonCameraDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLWNhbWVyYS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW5kcmFyYWoyNi9pb24tY2FtZXJhLyIsInNvdXJjZXMiOlsic3JjL2lvbi1jYW1lcmEuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ04sU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksR0FDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFbEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFLdkQsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBa0I7SUFzQjlCLFlBQ1MsaUJBQW1DLEVBQ25DLE9BQWU7UUFEZixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBQ25DLFlBQU8sR0FBUCxPQUFPLENBQVE7UUF0QmQsaUJBQVksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQXVCNUQsQ0FBQztJQXJCK0Isc0JBQXNCLENBQUMsS0FBWTtRQUNyRSxJQUNDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxLQUFLLE1BQU07WUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUNwQztZQUNELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2hDO2FBQU0sSUFDTixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsS0FBSyxRQUFRO1lBQ25DLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFDcEM7WUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNoQzthQUFNO1lBQ04sTUFBTSxJQUFJLEtBQUssQ0FDZCxvRUFBb0UsQ0FDcEUsQ0FBQztTQUNGO0lBQ0YsQ0FBQztJQU9LLGFBQWEsQ0FBQyxNQUFlOztZQUNsQyxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDakUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEMsQ0FBQztLQUFBO0NBQ0QsQ0FBQTs7WUFSNEIsZ0JBQWdCO1lBQzFCLE1BQU07O0FBdkJEO0lBQXRCLEtBQUssQ0FBQyxjQUFjLENBQUM7a0RBQWlCO0FBQzdCO0lBQVQsTUFBTSxFQUFFO3dEQUFzRDtBQUU1QjtJQUFsQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7Z0VBZ0JqQztBQXBCVyxrQkFBa0I7SUFIOUIsU0FBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLGdCQUFnQjtLQUMxQixDQUFDO0dBQ1csa0JBQWtCLENBK0I5QjtTQS9CWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG5cdERpcmVjdGl2ZSxcclxuXHRIb3N0TGlzdGVuZXIsXHJcblx0SW5wdXQsXHJcblx0T3V0cHV0LFxyXG5cdEV2ZW50RW1pdHRlcixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2FtZXJhIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jYW1lcmEvbmd4JztcclxuaW1wb3J0IHsgSUNvbmZpZyB9IGZyb20gJy4vY29uZmlnLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IElvbkNhbWVyYVNlcnZpY2UgfSBmcm9tICcuL2lvbi1jYW1yYS5zZXJ2aWNlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG5cdHNlbGVjdG9yOiAnW2FwcElvbkNhbWVyYV0nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW9uQ2FtZXJhRGlyZWN0aXZlIHtcclxuXHRASW5wdXQoJ2FwcElvbkNhbWVyYScpIGNvbmZpZzogSUNvbmZpZztcclxuXHRAT3V0cHV0KCkgY2FtZXJhUmVzdWx0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcblx0QEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKSBvbkNhbWVyYUVsZW1lbnRDbGlja2VkKGV2ZW50OiBFdmVudCkge1xyXG5cdFx0aWYgKFxyXG5cdFx0XHR0aGlzLmNvbmZpZy5vdXRwdXRUeXBlID09PSAnYmxvYicgJiZcclxuXHRcdFx0dGhpcy5fY2FtZXJhLkRlc3RpbmF0aW9uVHlwZS5GSUxFX1VSSVxyXG5cdFx0KSB7XHJcblx0XHRcdHRoaXMuZ2V0Q2FtZXJhRGF0YSh0aGlzLmNvbmZpZyk7XHJcblx0XHR9IGVsc2UgaWYgKFxyXG5cdFx0XHR0aGlzLmNvbmZpZy5vdXRwdXRUeXBlID09PSAnYmFzZTY0JyAmJlxyXG5cdFx0XHR0aGlzLl9jYW1lcmEuRGVzdGluYXRpb25UeXBlLkRBVEFfVVJMXHJcblx0XHQpIHtcclxuXHRcdFx0dGhpcy5nZXRDYW1lcmFEYXRhKHRoaXMuY29uZmlnKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcclxuXHRcdFx0XHQnVGhpcyBtZXRob2QgaXMgbm90IHlldCBpbXBsbWVudGVkISBlaXRoZXIgdXNlIERBVEFfVVJMIG9yIEZJTEVfVVJJJyxcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBfaW9uQ2FtZXJhU2VydmljZTogSW9uQ2FtZXJhU2VydmljZSxcclxuXHRcdHByaXZhdGUgX2NhbWVyYTogQ2FtZXJhLFxyXG5cdCkge31cclxuXHJcblx0YXN5bmMgZ2V0Q2FtZXJhRGF0YShvcHRpb246IElDb25maWcpIHtcclxuXHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuX2lvbkNhbWVyYVNlcnZpY2UuY2FtZXJhQWN0aW9uKG9wdGlvbik7XHJcblx0XHR0aGlzLmNhbWVyYVJlc3VsdC5lbWl0KHJlc3VsdCk7XHJcblx0fVxyXG59XHJcbiJdfQ==