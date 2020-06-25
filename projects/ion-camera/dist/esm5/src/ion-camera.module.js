import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { IonCameraDirective } from './ion-camera.directive';
import { Camera } from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { HttpClientModule } from '@angular/common/http';
import { IonCameraService } from './ion-camra.service';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLWNhbWVyYS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW5kcmFyYWoyNi9pb24tY2FtZXJhLyIsInNvdXJjZXMiOlsic3JjL2lvbi1jYW1lcmEubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzFELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBUXZEO0lBQUE7SUFPQSxDQUFDO3dCQVBZLGVBQWU7SUFDYix1QkFBTyxHQUFyQjtRQUNDLE9BQU87WUFDTixRQUFRLEVBQUUsaUJBQWU7WUFDekIsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7U0FDN0IsQ0FBQztJQUNILENBQUM7O0lBTlcsZUFBZTtRQU4zQixRQUFRLENBQUM7WUFDVCxZQUFZLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztZQUNsQyxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztZQUMzQixPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztZQUM3QixTQUFTLEVBQUUsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDO1NBQzVCLENBQUM7T0FDVyxlQUFlLENBTzNCO0lBQUQsc0JBQUM7Q0FBQSxBQVBELElBT0M7U0FQWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElvbkNhbWVyYURpcmVjdGl2ZSB9IGZyb20gJy4vaW9uLWNhbWVyYS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ2FtZXJhIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jYW1lcmEvbmd4JztcbmltcG9ydCB7IFdlYlZpZXcgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2lvbmljLXdlYnZpZXcvbmd4JztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJb25DYW1lcmFTZXJ2aWNlIH0gZnJvbSAnLi9pb24tY2FtcmEuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG5cdGRlY2xhcmF0aW9uczogW0lvbkNhbWVyYURpcmVjdGl2ZV0sXG5cdGltcG9ydHM6IFtIdHRwQ2xpZW50TW9kdWxlXSxcblx0ZXhwb3J0czogW0lvbkNhbWVyYURpcmVjdGl2ZV0sXG5cdHByb3ZpZGVyczogW0NhbWVyYSwgV2ViVmlld10sXG59KVxuZXhwb3J0IGNsYXNzIElvbkNhbWVyYU1vZHVsZSB7XG5cdHB1YmxpYyBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bmdNb2R1bGU6IElvbkNhbWVyYU1vZHVsZSxcblx0XHRcdHByb3ZpZGVyczogW0lvbkNhbWVyYVNlcnZpY2VdLFxuXHRcdH07XG5cdH1cbn1cbiJdfQ==