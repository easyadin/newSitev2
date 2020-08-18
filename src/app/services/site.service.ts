import { Work } from './../model/site.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SiteService {

  constructor() { }

  private _cv = "../../assets/IsraelAyokunnu.pdf";

  private _works: Work[] = [
    new Work(
      '18',
      '../../assets/work/carmart.png',
      'Carmart - Vehicle Rental',
      'Configure vehicle to preference and rent',
      'Super responsive web application for vehicle rental',
      '',
      'https://carmart.web.app/',
      'https://xd.adobe.com/view/0e840a00-d938-4fb9-8f94-7a2f0d3f903d-5bd7/',
      'Angular Ionic (S)CSS AdobeXD'
    ),
    new Work(
      '8',
      '../../assets/work/colorwine.png',
      'Color Wine - Shop',
      'Angular Ecommerce - Shop',
      'Beautiful wine landing Created in Angular framework with Ionic UI Framework',
      '',
      'https://colorwine.web.app/',
      'https://xd.adobe.com/view/58eb829f-c225-4cc9-bb18-dc1a926566d1-0db8/',
      'Angular Ionic (S)CSS AdobeXD'
    ),
    new Work(
      '9',
      '../../assets/work/flatfashion.png',
      'Flat Fashion - Shop',
      'Angular Ecommerce - Shop',
      'Clothing store landing page with sleek animation',
      '',
      'https://flatfashion.web.app/home',
      'https://xd.adobe.com/view/6214f3c4-f004-49d9-b955-383705615c51-3747/',
      'Angular Ionic (S)CSS AdobeXD'
    ),
    new Work(
      '10',
      '../../assets/work/wearkit.png',
      'Wear Kit Fashion store - Shop',
      'Angular Ecommerce - Shop',
      'Clothing store landing page with sleek animation clothing theme',
      '',
      'https://wearkit.web.app/home',
      'https://xd.adobe.com/view/ebab85bb-5784-45d6-b6ca-7614180d6683-bef8/',
      'Angular Ionic (S)CSS AdobeXD'
    ),
    new Work(
      '11',
      '../../assets/work/wetsuite.png',
      'Wet Suite Kit - Shop',
      'Angular Ecommerce - Shop',
      'Unisex wetsuite landing page',
      '',
      'https://wetsuite.web.app/',
      'https://xd.adobe.com/view/7d4e37c5-4f75-4672-a10f-1f033a663a85-281d/',
      'Angular Ionic (S)CSS AdobeXD'
    ),
    new Work(
      '12',
      '../../assets/work/razerheadphone.png',
      '3D model landing page for Razer kraken headphone',
      'Angular Ecommerce - Shop',
      'Interact with headphone in realtime',
      '',
      'https://razerheadphones.web.app/',
      'https://xd.adobe.com/view/4b0d2ae7-6746-42b3-adbe-f3fade269d94-1e5e/',
      'Angular Ionic Three.js (S)CSS AdobeXD'
    ),
    new Work(
      '13',
      '../../assets/work/airmax.png',
      'Realistic 3D model landing page for Airmax',
      'Angular Ecommerce - Shop',
      'Airmax Airmax Airmax',
      '',
      'https://airmax.web.app/home',
      'https://xd.adobe.com/view/e8c0a154-42b4-4611-9b80-d4ed7335d275-bd93/',
      'Angular Ionic (S)CSS AdobeXD'
    ),
    new Work(
      '14',
      '../../assets/work/robochat.png',
      'Realtime messaging app',
      'Prototype developed for Roboads.com',
      'Uses Firebase, AngularFire as backend and Authentication',
      '',
      'https://robochatt.web.app/',
      'https://xd.adobe.com/view/531b4b8d-a3f1-4e99-a346-f01c7e6fd655-0648/',
      'Angular Ionic (S)CSS AdobeXD Firebase AngularFire'
    ),
    new Work(
      '15',
      '../../assets/work/rivahouses.png',
      'Real Estate Landing page',
      'UI design for Riva-houses',
      'Uses Firebase, AngularFire as backend and Authentication',
      '',
      '',
      'https://xd.adobe.com/view/cb278544-f238-4efa-b499-6604716fe024-9e74/',
      'Angular Ionic (S)CSS AdobeXD Firebase AngularFire'
    ),
    new Work(
      '16',
      '../../assets/work/meekd.png',
      'Meekd Search engine',
      'UI design proposal for Meekd search engine',
      '',
      '',
      '',
      'https://xd.adobe.com/view/531b4b8d-a3f1-4e99-a346-f01c7e6fd655-0648/',
      'AdobeXD'
    ),
    new Work(
      '17',
      '../../assets/work/coza.png',
      'Coza Global Mobile App',
      'UI design, web and mobile application with Livestream etc',
      '',
      '',
      'https://cozaglobal.web.app/',
      'https://xd.adobe.com/view/4e1fc936-8c24-4ab8-a87d-35bc844c7cf0-1b4c/',
      'Angular Ionic (S)CSS AdobeXD Firebase AngularFire'
    ),
    new Work(
      '1',
      '../../assets/work/dc.PNG',
      'Dreams Connect - Startup',
      'Dreams Connect',
      'Dreams ultimately strive to improve her users statusQuo by curating content that delivers values',
      '',
      'https://dreamsconnect.web.app/',
      'https://xd.adobe.com/view/9f848bdd-e19f-4101-46e5-1f1f88dcc6cb-e9b5/',
      'Angular 9+ Ionic Framework AdobeXD'
    ),
    new Work(
      '2',
      '../../assets/work/instava-campaign.PNG',
      'InstaVal Campaign Site',
      'InstaVal',
      'InstaVal webpage for marketing campaign',
      '',
      '',
      'https://xd.adobe.com/view/8851b66b-c495-4b75-7f61-034277899258-fe60/',
      'Html Asp.net Angular 9+ AdobeXD'
    ),

    new Work(
      '3',
      '../../assets/work/mi-pod-mobile.PNG',
      'Mi-Pod',
      'Prototype',
      'Mi-Pod mobile description',
      '',
      '',
      'https://projects.invisionapp.com/prototype/myPOD-ck9bmiajv00261001qabc0fln/play/e1ef9b30',
      'Angular MaterialDesign Firebase CustomAPI InvisionStudio'
    ),
    new Work(
      '4',
      '../../assets/work/hachiro.PNG',
      'ed hachiro sneaker',
      'Prototype',
      'Hachiro High Top Sneaker  ED ELLEN DEGENERES',
      '',
      '',
      'https://projects.invisionapp.com/prototype/ED-ELLEN-DEGENERES-HACHIRO-SNEAKER-ck0mtpukn0059wt01a6o7wzkx/play/0fa23c61',
      'InvisionStudio'
    ),
    new Work(
      '5',
      '../../assets/work/ef.PNG',
      'Eliseo Ferrante',
      'Prof. Eliseo Ferrante',
      'Portfolio for a Senior Lecturer and professor at the University of Birmingham',
      '',
      '',
      'https://xd.adobe.com/view/69f02665-0c9c-4536-6435-1d8d8b57e8f7-1fc1/?fullscreen',
      'AdobeXD'
    ),
    new Work(
      '6',
      '../../assets/work/palsch.PNG',
      'Palsch',
      'Prototype',
      'Intent based meeting scheduler',
      '',
      '',
      'https://projects.invisionapp.com/prototype/palschUI-ck0xpczum00bswe015eckx01m/play/679b7774',
      'InvisionStudio'
    ),
    new Work(
      '7',
      '../../assets/work/mi-dashboard.PNG',
      'Mi-Pod Dashboard',
      'Prototype',
      'Mi-Pod Dashboard to manage, audio messages and podcast,air date, publish and share to the world',
      'https://github.com/easyadin/myPOD-Dashboard',
      'https://fir-pci-restapi.web.app/',
      'https://projects.invisionapp.com/prototype/myPODDashboard-ck9guixn60005py01a4hp30g8',
      'Angular MaterialDesign Firebase CustomAPI InvisionStudio'
    ),
  ];

  get works() {
    return [...this._works];
  }

  get cv() {
    return this._cv;
  }

  getWork(id: string) {
    return { ...this._works.find(work => work.id === id) };
  }



  _shouldOpenContactMenu = false;
  contactMenuChanged = new Subject<boolean>();

  get shouldOpenContactMenu() {
    return this.contactMenuChanged.next(this._shouldOpenContactMenu)
  }

  openContactMenu() {
    this._shouldOpenContactMenu = true;
    this.contactMenuChanged.next(this._shouldOpenContactMenu)
  }



}
