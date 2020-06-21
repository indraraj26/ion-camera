import { CameraOptions } from '@ionic-native/camera/ngx';

export interface IConfig extends CameraOptions {
	outputResult: 'blob' | 'base64';
}
