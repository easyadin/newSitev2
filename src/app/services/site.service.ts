import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SiteService {

  constructor() { }

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
