import { CameraOptions } from '@ionic-native/camera/ngx';

export interface IConfig extends CameraOptions {
	outputType: 'blob' | 'base64';
}
