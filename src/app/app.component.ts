import { SiteService } from './services/site.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
}) 
export class AppComponent implements OnInit {
 
  constructor(
    private menu: MenuController,
    private siteService: SiteService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  _shouldOpenContactMenu = false;
  private shouldOpenSub : Subscription;
  enableBackdropDismiss = false;
  showBackdrop = false;
  shouldPropagate = false;

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {  
    this.menu.enable(false, "contactSideMenu");
    this.menu.enable(false, "mobileSideMenu")
    this.menu.enable(true, "defaultMenu");
  }

  ionViewWillEnter() {
    this.menu.enable(true, "defaultMenu");
    this.menu.enable(false, "contactSideMenu");
    this.menu.enable(false, "mobileSideMenu")
  }


  closeContactMenu(){
    this.menu.enable(false, "contactSideMenu");
    this.menu.close("contactSideMenu");
    this.menu.enable(true, "defaultMenu");
    this.menu.enable(false, "mobileSideMenu");
    this.menu.close("mobileSideMenu");
  }

  openContactMenu() {
    this.menu.enable(true, "contactSideMenu");
    this.menu.toggle("contactSideMenu")
    // this.siteSrv.openContactMenu()
  }
  
}
