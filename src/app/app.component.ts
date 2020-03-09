import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Utils } from '../services/Utils'

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
  
  public ultimasCompras = [
  	{
	  data : '2020-01-01',
	  local: 'Mercado A',
	  idx  : 0
	},
  	{
	  data : '2020-01-02',
	  local: 'Mercado B',
	  idx  : 1
	},
  	{
	  data : '2020-01-03',
	  local: 'Mercado C',
	  idx  : 2
	},
  	{
	  data : '2020-01-04',
	  local: 'Mercado D',
	  idx  : 3
	},
  	{
	  data : '2020-01-05',
	  local: 'Mercado E',
	  idx  : 4
	},
  	{
	  data : '2020-01-06',
	  local: 'Mercado F',
	  idx  : 5
	},
  ]

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
	public utils: Utils
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
