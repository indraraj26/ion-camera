import { HttpClient } from '@angular/common/http';
import { Camera } from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { IConfig } from './config.interface';
export declare class IonCameraService {
    private _httpClient;
    private _camera;
    private _webview;
    constructor(_httpClient: HttpClient, _camera: Camera, _webview: WebView);
    cameraAction(option: IConfig): Promise<any>;
}
