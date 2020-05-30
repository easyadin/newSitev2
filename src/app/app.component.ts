import { SiteService } from './services/site.service';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

import { Platform, MenuController, IonContent } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Subscription } from 'rxjs';

import { AnimationController } from '@ionic/angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private animationCtrl: AnimationController,
    private menu: MenuController,
    private siteService: SiteService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }


  @ViewChild(IonContent, { static: false }) content: IonContent;
  _shouldOpenContactMenu = false;
  private shouldOpenSub: Subscription;
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

  ngAfterViewInit() {
    // apply reveal section animation
    const animateGridLine = this.animationCtrl.create().addElement(document.querySelector('.grid'))
      .duration(10000)
      .fromTo('opacity', '0', '1');
    animateGridLine.play();

//default side bar
    const revealsideBar = this.animationCtrl.create().addElement(document.querySelector('.defaultSideMenu'))
      .duration(1000)
      .easing('ease-out')
      .delay(300)
      .fromTo('transform', 'translateX(-100px)', 'translateX(0)');
      revealsideBar.play();
  }

  ionViewWillEnter() {
    this.menu.enable(true, "defaultMenu");
    this.menu.enable(false, "contactSideMenu");
    this.menu.enable(false, "mobileSideMenu");
  }


  closeContactMenu() {
    this.menu.enable(false, "contactSideMenu");
    this.menu.close("contactSideMenu");
    this.menu.enable(true, "defaultMenu");
    this.menu.enable(false, "mobileSideMenu");
    this.menu.close("mobileSideMenu");
  }

  openContactMenu() {
    this.menu.enable(true, "contactSideMenu");
    this.menu.toggle("contactSideMenu")
  }

  ScrollToPoint(X, element) {
    var el = document.getElementById(element);
    this.content.scrollToPoint(X, el.offsetTop, 600);
  }


}
