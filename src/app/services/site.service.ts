import { Work } from './../model/site.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SiteService {

  constructor() {}

  private _cv = "../../assets/IsraelAyokunnu.pdf";

  private  _works: Work[] = [
    new Work(
      '1',
      '../../assets/work/instava-campaign.PNG',
      'Dreams Connect - Startup',
      'Dreams Connect',
      'Dreams ultimately strive to improve her users statusQuo by curating content that delivers values',
      '',
      'https://dreamsconnect.web.app/',
      'https://xd.adobe.com/view/9f848bdd-e19f-4101-46e5-1f1f88dcc6cb-e9b5/',
      'Angular 9+ Ionic Framework AdobeXD'
    ),
    new Work(
      '1',
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
      '2',
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
      '3',
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
      '4',
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
      '5',
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
      '6',
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
   
  get works(){
    return [...this._works];
  }

  get cv(){
    return this._cv;
  }

  getWork(id: string){
    return {...this._works.find(work => work.id === id)};
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
