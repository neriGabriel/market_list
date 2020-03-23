import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage';
import { Utils } from '../services/Utils'

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { BrMaskerModule } from 'br-mask';

import { InfoCompraPageModule } from './info-compra/info-compra.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
 	BrMaskerModule,
    BrowserModule,
    IonicModule.forRoot(),
	  IonicStorageModule.forRoot(),
    AppRoutingModule,
    InfoCompraPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
	Utils,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
