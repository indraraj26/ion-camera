import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { Camera } from '@ionic-native/camera/ngx';

import { HomePageRoutingModule } from './home-routing.module';
import { IonCameraModule } from 'ion-camera';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		HomePageRoutingModule,
		IonCameraModule,
	],
	declarations: [HomePage],
	providers: [Camera],
})
export class HomePageModule {}
