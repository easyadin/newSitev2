import { SiteService } from './../services/site.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MenuController, AnimationController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  constructor(
    private siteSrv: SiteService,
    private menu: MenuController,
    private animationCtrl: AnimationController, ) { }

  @ViewChild(IonContent, { static: false }) content: IonContent;
  selectedCompany = 'instaval'
  private scrollObserver: IntersectionObserver;

  ngOnInit() {
    this.scrollbarModify();
  }

  ngAfterViewInit() {
    //scroll animation with Intersection observer
    this.scrollObserver = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting === true) {
        // apply reveal section animation
        const revealSection = this.animationCtrl.create().addElement(entries[0].target)
          .duration(1500)
          .fromTo('opacity', '0', '1');

        revealSection.play();
      }
      else {
        const revealSection = this.animationCtrl.create().addElement(entries[0].target)
          .duration(1000)
          .fromTo('opacity', '1', '0');
        revealSection.play();
      }
    }, {
      threshold: .1
    });
    const sections = document.querySelectorAll('section')
    sections.forEach(section => {
      this.scrollObserver.observe(section)
    })


  }



  ngOnDestroy() {
    this.scrollObserver.disconnect();
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

  openMobileMenu() {
    this.menu.enable(true, "mobileSideMenu")
    this.menu.open("mobileSideMenu");
  }


  logScrolling(event) {
    // console.log(event.detail)
  }

  ScrollToPoint(X, element) {
    console.log("asdas")
    var el = document.getElementById(element);
    this.content.scrollToPoint(X, el.offsetTop, 600);
  }


}
