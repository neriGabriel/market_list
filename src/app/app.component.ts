import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Utils } from '../services/Utils'
import { CompraService } from '../services/CompraService/compra.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 1;
  public appPages = [
    {
      title: 'Nova',
      url: 'nova-compra',
      icon: 'add'
    },
    {
      title: 'Compras',
      url: 'listar-compra',
      icon: 'archive'
    }
  ];

  public ultimasCompras = [];


  constructor(private platform: Platform, private splashScreen: SplashScreen,private statusBar: StatusBar,
	            public utils: Utils,public compraSerivce:CompraService) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ionViewWillEnter() {
    console.log(1);
  }
  ionViewDidEnter() {
    console.log(2);
  }
  ionViewWillLeave() {
    console.log(3);
  }
  ionViewDidLeave() {
    console.log(4);
  }

  async ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }

    this.ultimasCompras = await this.compraSerivce.getAll2();
  }

  doRefresh(event) {
    setTimeout(async () => {
      this.ultimasCompras = await this.compraSerivce.getAll2();
      event.target.complete();
    }, 2000);
  }
}
