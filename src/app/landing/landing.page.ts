import { SiteService } from './../services/site.service';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  constructor(private siteSrv: SiteService, private menu: MenuController) { }
  private contactMenuSub: Subscription;

  selectedCompany = 'instaval'
  ngOnInit() {
    this.scrollbarModify();
  }

  onClickResume() {
    // get latest resume

  }

  showDetails(company) {
    this.selectedCompany = company;
  }
  // modify scrollbar UI
  scrollbarModify = async () => {
    const content = document.querySelector('ion-content');
    const styles = document.createElement('style');

    styles.textContent = `
    main {
      height: 100%;
      overflow-y: scroll;
      -ms-scroll-snap-type: y mandatory;
      scroll-snap-type: y mandatory;
    }

    

    ::-webkit-scrollbar {
      width: 1px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px grey; 
      border-radius: 10px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #fff; 
      border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #fff; 
    }
  `;

    content.shadowRoot.appendChild(styles);
  }




  openContactMenu() {
    this.menu.enable(true, "contactSideMenu");
    this.menu.toggle("contactSideMenu")
    // this.siteSrv.openContactMenu()
  }

  openMobileMenu(){
    this.menu.enable(true, "mobileSideMenu")
    this.menu.open("mobileSideMenu");
  }

}
