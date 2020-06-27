import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { IonCameraDirective } from './ion-camera.directive';
import { Camera } from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { HttpClientModule } from '@angular/common/http';
import { IonCameraService } from './ion-camera.service';
var IonCameraModule = /** @class */ (function () {
    function IonCameraModule() {
    }
    IonCameraModule_1 = IonCameraModule;
    IonCameraModule.forRoot = function () {
        return {
            ngModule: IonCameraModule_1,
            providers: [IonCameraService],
        };
    };
    var IonCameraModule_1;
    IonCameraModule = IonCameraModule_1 = __decorate([
        NgModule({
            declarations: [IonCameraDirective],
            imports: [HttpClientModule],
            exports: [IonCameraDirective],
            providers: [Camera, WebView],
        })
    ], IonCameraModule);
    return IonCameraModule;
}());
export { IonCameraModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLWNhbWVyYS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW5kcmFyYWoyNi9pb24tY2FtZXJhLyIsInNvdXJjZXMiOlsic3JjL2lvbi1jYW1lcmEubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzFELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBUXhEO0lBQUE7SUFPQSxDQUFDO3dCQVBZLGVBQWU7SUFDYix1QkFBTyxHQUFyQjtRQUNDLE9BQU87WUFDTixRQUFRLEVBQUUsaUJBQWU7WUFDekIsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7U0FDN0IsQ0FBQztJQUNILENBQUM7O0lBTlcsZUFBZTtRQU4zQixRQUFRLENBQUM7WUFDVCxZQUFZLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztZQUNsQyxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztZQUMzQixPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztZQUM3QixTQUFTLEVBQUUsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDO1NBQzVCLENBQUM7T0FDVyxlQUFlLENBTzNCO0lBQUQsc0JBQUM7Q0FBQSxBQVBELElBT0M7U0FQWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElvbkNhbWVyYURpcmVjdGl2ZSB9IGZyb20gJy4vaW9uLWNhbWVyYS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ2FtZXJhIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jYW1lcmEvbmd4JztcbmltcG9ydCB7IFdlYlZpZXcgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2lvbmljLXdlYnZpZXcvbmd4JztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJb25DYW1lcmFTZXJ2aWNlIH0gZnJvbSAnLi9pb24tY2FtZXJhLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuXHRkZWNsYXJhdGlvbnM6IFtJb25DYW1lcmFEaXJlY3RpdmVdLFxuXHRpbXBvcnRzOiBbSHR0cENsaWVudE1vZHVsZV0sXG5cdGV4cG9ydHM6IFtJb25DYW1lcmFEaXJlY3RpdmVdLFxuXHRwcm92aWRlcnM6IFtDYW1lcmEsIFdlYlZpZXddLFxufSlcbmV4cG9ydCBjbGFzcyBJb25DYW1lcmFNb2R1bGUge1xuXHRwdWJsaWMgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG5nTW9kdWxlOiBJb25DYW1lcmFNb2R1bGUsXG5cdFx0XHRwcm92aWRlcnM6IFtJb25DYW1lcmFTZXJ2aWNlXSxcblx0XHR9O1xuXHR9XG59XG4iXX0=