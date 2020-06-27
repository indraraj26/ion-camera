import { __awaiter, __decorate } from "tslib";
import { Directive, HostListener, Input, Output, EventEmitter, } from '@angular/core';
import { IonCameraService } from './ion-camra.service';
let IonCameraDirective = class IonCameraDirective {
    constructor(_ionCameraService) {
        this._ionCameraService = _ionCameraService;
        this.cameraResult = new EventEmitter();
    }
    onCameraElementClicked(event) {
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
    }
    getCameraData(option) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._ionCameraService.cameraAction(option);
            this.cameraResult.emit(result);
        });
    }
};
IonCameraDirective.ctorParameters = () => [
    { type: IonCameraService }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLWNhbWVyYS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW5kcmFyYWoyNi9pb24tY2FtZXJhLyIsInNvdXJjZXMiOlsibGliL2lvbi1jYW1lcmEuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ04sU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksR0FDWixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUt2RCxJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFrQjtJQWtCOUIsWUFBb0IsaUJBQW1DO1FBQW5DLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFoQjdDLGlCQUFZLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUFnQkwsQ0FBQztJQWR4QixzQkFBc0IsQ0FBQyxLQUFZO1FBQ3JFLFdBQVc7UUFDWCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxLQUFLLENBQUMsRUFBRTtZQUN0QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNoQyxXQUFXO1NBQ1g7YUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxLQUFLLENBQUMsRUFBRTtZQUM3QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNoQzthQUFNO1lBQ04sTUFBTSxJQUFJLEtBQUssQ0FDZCwwRUFBMEUsQ0FDMUUsQ0FBQztTQUNGO0lBQ0YsQ0FBQztJQUlLLGFBQWEsQ0FBQyxNQUFlOztZQUNsQyxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDakUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEMsQ0FBQztLQUFBO0NBQ0QsQ0FBQTs7WUFOdUMsZ0JBQWdCOztBQWpCaEM7SUFBdEIsS0FBSyxDQUFDLGNBQWMsQ0FBQztrREFBaUI7QUFDN0I7SUFBVCxNQUFNLEVBQUU7d0RBQXNEO0FBRTVCO0lBQWxDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztnRUFZakM7QUFoQlcsa0JBQWtCO0lBSDlCLFNBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSxnQkFBZ0I7S0FDMUIsQ0FBQztHQUNXLGtCQUFrQixDQXdCOUI7U0F4Qlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuXHREaXJlY3RpdmUsXHJcblx0SG9zdExpc3RlbmVyLFxyXG5cdElucHV0LFxyXG5cdE91dHB1dCxcclxuXHRFdmVudEVtaXR0ZXIsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElDb25maWcgfSBmcm9tICcuL2NvbmZpZy5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBJb25DYW1lcmFTZXJ2aWNlIH0gZnJvbSAnLi9pb24tY2FtcmEuc2VydmljZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuXHRzZWxlY3RvcjogJ1thcHBJb25DYW1lcmFdJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIElvbkNhbWVyYURpcmVjdGl2ZSB7XHJcblx0QElucHV0KCdhcHBJb25DYW1lcmEnKSBjb25maWc6IElDb25maWc7XHJcblx0QE91dHB1dCgpIGNhbWVyYVJlc3VsdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG5cdEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSkgb25DYW1lcmFFbGVtZW50Q2xpY2tlZChldmVudDogRXZlbnQpIHtcclxuXHRcdC8vIEZpbGUgVVJJXHJcblx0XHRpZiAodGhpcy5jb25maWcuZGVzdGluYXRpb25UeXBlID09PSAxKSB7XHJcblx0XHRcdHRoaXMuZ2V0Q2FtZXJhRGF0YSh0aGlzLmNvbmZpZyk7XHJcblx0XHRcdC8vIERhdGEgVVJMXHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuY29uZmlnLmRlc3RpbmF0aW9uVHlwZSA9PT0gMCkge1xyXG5cdFx0XHR0aGlzLmdldENhbWVyYURhdGEodGhpcy5jb25maWcpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFxyXG5cdFx0XHRcdCdUaGlzIG1ldGhvZCBpcyBub3QgeWV0IGltcGxtZW50ZWQhIGVpdGhlciB1c2UgREFUQV9VUkwoMCkgb3IgRklMRV9VUkkoMSknLFxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfaW9uQ2FtZXJhU2VydmljZTogSW9uQ2FtZXJhU2VydmljZSkge31cclxuXHJcblx0YXN5bmMgZ2V0Q2FtZXJhRGF0YShvcHRpb246IElDb25maWcpIHtcclxuXHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuX2lvbkNhbWVyYVNlcnZpY2UuY2FtZXJhQWN0aW9uKG9wdGlvbik7XHJcblx0XHR0aGlzLmNhbWVyYVJlc3VsdC5lbWl0KHJlc3VsdCk7XHJcblx0fVxyXG59XHJcbiJdfQ==