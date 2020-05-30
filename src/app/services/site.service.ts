import { Work } from './../model/site.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SiteService {

  constructor() {}

  private  _works: Work[] = [
    new Work(
      '1',
      '../../assets/work/instava-campaign.PNG',
      'InstaVal',
      'InstaVal webpage for marketing campaign',
      '',
      '',
      'https://xd.adobe.com/view/8851b66b-c495-4b75-7f61-034277899258-fe60/'
    ),
    
    new Work(
      '2',
      '../../assets/work/mi-pod-mobile.PNG',
      'Mi-Pod',
      'Mi-Pod mobile description',
      '',
      'https://projects.invisionapp.com/prototype/myPOD-ck9bmiajv00261001qabc0fln/play/e1ef9b30',
      ''
    ),
    new Work(
      '3',
      '../../assets/work/hachiro.PNG',
      'ed hachiro sneaker',
      'Hachiro High Top Sneaker  ED ELLEN DEGENERES',
      '',
      '',
      'https://projects.invisionapp.com/prototype/ED-ELLEN-DEGENERES-HACHIRO-SNEAKER-ck0mtpukn0059wt01a6o7wzkx'
    ),
    new Work(
      '4',
      '../../assets/work/ef.PNG',
      'Eliseo Ferrante',
      'Portfolio for a Senior Lecturer and professor at the University of Birmingham',
      '',
      '',
      'https://xd.adobe.com/view/69f02665-0c9c-4536-6435-1d8d8b57e8f7-1fc1/?fullscreen'
    ),
    new Work(
      '5',
      '../../assets/work/palsch.PNG',
      'Palsch',
      'Intent based meeting scheduler',
      '',
      '',
      'https://projects.invisionapp.com/prototype/palschUI-ck0xpczum00bswe015eckx01m/play/679b7774'
    ),
    new Work(
      '6',
      '../../assets/work/mi-dashboard.PNG',
      'Mi-Pod Dashboard',
      'Mi-Pod Dashboard to manage, audio messages and podcast,air date, publish and share to the world',
      'https://github.com/easyadin/myPOD-Dashboard',
      'https://fir-pci-restapi.web.app/',
      'https://projects.invisionapp.com/prototype/myPODDashboard-ck9guixn60005py01a4hp30g8',
    ),
  ];
   
  get works(){
    return [...this._works];
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
