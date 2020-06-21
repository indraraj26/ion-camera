import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { IonCameraDirective } from './ion-camera.directive';
import { Camera } from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
var IonCameraModule = /** @class */ (function () {
    function IonCameraModule() {
    }
    IonCameraModule = __decorate([
        NgModule({
            declarations: [IonCameraDirective],
            imports: [],
            exports: [IonCameraDirective],
            providers: [Camera, WebView],
        })
    ], IonCameraModule);
    return IonCameraModule;
}());
export { IonCameraModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLWNhbWVyYS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pb24tY2FtZXJhLyIsInNvdXJjZXMiOlsic3JjL2lvbi1jYW1lcmEubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFRMUQ7SUFBQTtJQUE4QixDQUFDO0lBQWxCLGVBQWU7UUFOM0IsUUFBUSxDQUFDO1lBQ1QsWUFBWSxFQUFFLENBQUMsa0JBQWtCLENBQUM7WUFDbEMsT0FBTyxFQUFFLEVBQUU7WUFDWCxPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztZQUM3QixTQUFTLEVBQUUsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDO1NBQzVCLENBQUM7T0FDVyxlQUFlLENBQUc7SUFBRCxzQkFBQztDQUFBLEFBQS9CLElBQStCO1NBQWxCLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW9uQ2FtZXJhRGlyZWN0aXZlIH0gZnJvbSAnLi9pb24tY2FtZXJhLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDYW1lcmEgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NhbWVyYS9uZ3gnO1xuaW1wb3J0IHsgV2ViVmlldyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvaW9uaWMtd2Vidmlldy9uZ3gnO1xuXG5ATmdNb2R1bGUoe1xuXHRkZWNsYXJhdGlvbnM6IFtJb25DYW1lcmFEaXJlY3RpdmVdLFxuXHRpbXBvcnRzOiBbXSxcblx0ZXhwb3J0czogW0lvbkNhbWVyYURpcmVjdGl2ZV0sXG5cdHByb3ZpZGVyczogW0NhbWVyYSwgV2ViVmlld10sXG59KVxuZXhwb3J0IGNsYXNzIElvbkNhbWVyYU1vZHVsZSB7fVxuIl19