# ion camera

ion camera provides directive and service to integrate cordova camera plugin on your Ionic application.

# [Demo application](https://github.com/indraraj26/ionic5-starter-tabs-sidemenu/tree/ionic-camera-demo)

<img src="https://github.com/indraraj26/ion-camera/blob/master/src/assets/images/source.JPG?raw=true" alt="ion-camera-demo" width="250"/>

# Getting Started

## Feature:

-   File URI will give you an blob
-   Directive and Service that manages everything for you out of box.

# Installation

Before you install this package make sure that you are having below package installed on your project.

```
ionic cordova plugin add cordova-plugin-camera
npm install @ionic-native/camera

ionic cordova plugin add cordova-plugin-ionic-webview
npm install @ionic-native/ionic-webview
```

```
npm install @indraraj26/ion-camera
```

And then include it in your module (see app.module.ts):

```
import { IonCameraModule } from '@indraraj26/ion-camera';
// ...

@NgModule({
imports: [
 IonCameraModule.forRoot()
// ...
]
// ...
})
export class AppModule {}
```

If you are going to use this in feature module then include it in your feat.module.ts to use appIonCamera directive

```
import { IonCameraModule } from '@indraraj26/ion-camera';
// ...

@NgModule({
imports: [
 IonCameraModule
// ...
]
// ...
})
export class FeatModule {}
```

# Usage

# **Breaking changes** 1.0.0

Now output will be in object key and value.

```
  {result: blob, filePath: 'file://etc'}
```

## Destination Type:

-   Destination type FILE_URI it will return blob (recommend you to use)
-   Destination type DATA_URL it will return base64 (default feature of cordova camera plugin and not recommended)

Directive:

You can place below directive on any element.

home.html

```
<ion-label [appIonCamera]="config" (cameraResult)="onCameraResult($event)">Open camera</ion-label>
```

home.ts

```
import { IonCameraService, IConfig } from '@indraraj26/ion-camera';

export class HomePage {
constructor(private camera: Camera, private _httpClient: HttpClient) {}
    public showImage: string;

    config: IConfig = {
    	quality: 50,
    	destinationType: this.camera.DestinationType.FILE_URI,
    	encodingType: this.camera.EncodingType.JPEG,
    	mediaType: this.camera.MediaType.PICTURE,
    	sourceType: this.camera.PictureSourceType.CAMERA,
    };

    onCameraResult(event: any) {
    console.log('returns blob', event);
    this.showImage = event.filePath;
    const formData = new FormData();
    formData.append('fileKey', event.result)
    this._httpClient.post('url', formData).subscribe()
  }

}

```

Service:

```
import { IonCameraService, IConfig } from '@indraraj26/ion-camera';

export class HomePage {
  public showImage: string;

	config: IConfig = {
		quality: 50,
		destinationType: this.camera.DestinationType.FILE_URI,
		encodingType: this.camera.EncodingType.JPEG,
		mediaType: this.camera.MediaType.PICTURE,
    sourceType: this.camera.PictureSourceType.CAMERA,
  };

  constructor(private _ionCameraService: IonCameraService, private _camera: Camera, private _httpClient: HttpClient) { }

  async openCameraThroughService() {
    const output = await this._ionCameraService.cameraAction(this.config);
    console.log(output, 'blob')
    this.showImage = output.filePath;
    const formData = new FormData();
    formData.append('fileKey', output.result)
    this._httpClient.post('url', formData).subscribe()
  }
}
```

# Help Improve

Found a bug or an issue with this? [Open a new issue](https://github.com/indraraj26/ion-camera/issues) here on GitHub.

# Supported Version

Ionic 4
Ionic 5
