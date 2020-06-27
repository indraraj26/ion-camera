import { __awaiter, __decorate } from "tslib";
import { Directive, HostListener, Input, Output, EventEmitter, } from '@angular/core';
import { IonCameraService } from './ion-camera.service';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLWNhbWVyYS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW5kcmFyYWoyNi9pb24tY2FtZXJhLyIsInNvdXJjZXMiOlsic3JjL2lvbi1jYW1lcmEuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ04sU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksR0FDWixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUt4RCxJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFrQjtJQWtCOUIsWUFBb0IsaUJBQW1DO1FBQW5DLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFoQjdDLGlCQUFZLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUFnQkwsQ0FBQztJQWR4QixzQkFBc0IsQ0FBQyxLQUFZO1FBQ3JFLFdBQVc7UUFDWCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxLQUFLLENBQUMsRUFBRTtZQUN0QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNoQyxXQUFXO1NBQ1g7YUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxLQUFLLENBQUMsRUFBRTtZQUM3QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNoQzthQUFNO1lBQ04sTUFBTSxJQUFJLEtBQUssQ0FDZCwwRUFBMEUsQ0FDMUUsQ0FBQztTQUNGO0lBQ0YsQ0FBQztJQUlLLGFBQWEsQ0FBQyxNQUFlOztZQUNsQyxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDakUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEMsQ0FBQztLQUFBO0NBQ0QsQ0FBQTs7WUFOdUMsZ0JBQWdCOztBQWpCaEM7SUFBdEIsS0FBSyxDQUFDLGNBQWMsQ0FBQztrREFBaUI7QUFDN0I7SUFBVCxNQUFNLEVBQUU7d0RBQXNEO0FBRTVCO0lBQWxDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztnRUFZakM7QUFoQlcsa0JBQWtCO0lBSDlCLFNBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSxnQkFBZ0I7S0FDMUIsQ0FBQztHQUNXLGtCQUFrQixDQXdCOUI7U0F4Qlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuXHREaXJlY3RpdmUsXHJcblx0SG9zdExpc3RlbmVyLFxyXG5cdElucHV0LFxyXG5cdE91dHB1dCxcclxuXHRFdmVudEVtaXR0ZXIsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElDb25maWcgfSBmcm9tICcuL2NvbmZpZy5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBJb25DYW1lcmFTZXJ2aWNlIH0gZnJvbSAnLi9pb24tY2FtZXJhLnNlcnZpY2UnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcblx0c2VsZWN0b3I6ICdbYXBwSW9uQ2FtZXJhXScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJb25DYW1lcmFEaXJlY3RpdmUge1xyXG5cdEBJbnB1dCgnYXBwSW9uQ2FtZXJhJykgY29uZmlnOiBJQ29uZmlnO1xyXG5cdEBPdXRwdXQoKSBjYW1lcmFSZXN1bHQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuXHRASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pIG9uQ2FtZXJhRWxlbWVudENsaWNrZWQoZXZlbnQ6IEV2ZW50KSB7XHJcblx0XHQvLyBGaWxlIFVSSVxyXG5cdFx0aWYgKHRoaXMuY29uZmlnLmRlc3RpbmF0aW9uVHlwZSA9PT0gMSkge1xyXG5cdFx0XHR0aGlzLmdldENhbWVyYURhdGEodGhpcy5jb25maWcpO1xyXG5cdFx0XHQvLyBEYXRhIFVSTFxyXG5cdFx0fSBlbHNlIGlmICh0aGlzLmNvbmZpZy5kZXN0aW5hdGlvblR5cGUgPT09IDApIHtcclxuXHRcdFx0dGhpcy5nZXRDYW1lcmFEYXRhKHRoaXMuY29uZmlnKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcclxuXHRcdFx0XHQnVGhpcyBtZXRob2QgaXMgbm90IHlldCBpbXBsbWVudGVkISBlaXRoZXIgdXNlIERBVEFfVVJMKDApIG9yIEZJTEVfVVJJKDEpJyxcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX2lvbkNhbWVyYVNlcnZpY2U6IElvbkNhbWVyYVNlcnZpY2UpIHt9XHJcblxyXG5cdGFzeW5jIGdldENhbWVyYURhdGEob3B0aW9uOiBJQ29uZmlnKSB7XHJcblx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLl9pb25DYW1lcmFTZXJ2aWNlLmNhbWVyYUFjdGlvbihvcHRpb24pO1xyXG5cdFx0dGhpcy5jYW1lcmFSZXN1bHQuZW1pdChyZXN1bHQpO1xyXG5cdH1cclxufVxyXG4iXX0=