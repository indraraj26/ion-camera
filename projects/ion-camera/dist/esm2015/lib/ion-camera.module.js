var IonCameraModule_1;
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { IonCameraDirective } from './ion-camera.directive';
import { Camera } from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { HttpClientModule } from '@angular/common/http';
import { IonCameraService } from './ion-camra.service';
let IonCameraModule = IonCameraModule_1 = class IonCameraModule {
    static forRoot() {
        return {
            ngModule: IonCameraModule_1,
            providers: [IonCameraService],
        };
    }
};
IonCameraModule = IonCameraModule_1 = __decorate([
    NgModule({
        declarations: [IonCameraDirective],
        imports: [HttpClientModule],
        exports: [IonCameraDirective],
        providers: [Camera, WebView],
    })
], IonCameraModule);
export { IonCameraModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLWNhbWVyYS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW5kcmFyYWoyNi9pb24tY2FtZXJhLyIsInNvdXJjZXMiOlsibGliL2lvbi1jYW1lcmEubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQVF2RCxJQUFhLGVBQWUsdUJBQTVCLE1BQWEsZUFBZTtJQUNwQixNQUFNLENBQUMsT0FBTztRQUNwQixPQUFPO1lBQ04sUUFBUSxFQUFFLGlCQUFlO1lBQ3pCLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO1NBQzdCLENBQUM7SUFDSCxDQUFDO0NBQ0QsQ0FBQTtBQVBZLGVBQWU7SUFOM0IsUUFBUSxDQUFDO1FBQ1QsWUFBWSxFQUFFLENBQUMsa0JBQWtCLENBQUM7UUFDbEMsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7UUFDM0IsT0FBTyxFQUFFLENBQUMsa0JBQWtCLENBQUM7UUFDN0IsU0FBUyxFQUFFLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQztLQUM1QixDQUFDO0dBQ1csZUFBZSxDQU8zQjtTQVBZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW9uQ2FtZXJhRGlyZWN0aXZlIH0gZnJvbSAnLi9pb24tY2FtZXJhLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDYW1lcmEgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NhbWVyYS9uZ3gnO1xuaW1wb3J0IHsgV2ViVmlldyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvaW9uaWMtd2Vidmlldy9uZ3gnO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IElvbkNhbWVyYVNlcnZpY2UgfSBmcm9tICcuL2lvbi1jYW1yYS5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcblx0ZGVjbGFyYXRpb25zOiBbSW9uQ2FtZXJhRGlyZWN0aXZlXSxcblx0aW1wb3J0czogW0h0dHBDbGllbnRNb2R1bGVdLFxuXHRleHBvcnRzOiBbSW9uQ2FtZXJhRGlyZWN0aXZlXSxcblx0cHJvdmlkZXJzOiBbQ2FtZXJhLCBXZWJWaWV3XSxcbn0pXG5leHBvcnQgY2xhc3MgSW9uQ2FtZXJhTW9kdWxlIHtcblx0cHVibGljIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuXHRcdHJldHVybiB7XG5cdFx0XHRuZ01vZHVsZTogSW9uQ2FtZXJhTW9kdWxlLFxuXHRcdFx0cHJvdmlkZXJzOiBbSW9uQ2FtZXJhU2VydmljZV0sXG5cdFx0fTtcblx0fVxufVxuIl19