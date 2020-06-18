import { Component, OnInit } from '@angular/core';
import { SiteService } from '../services/site.service';
import { Work } from '../model/site.model';

@Component({
  selector: 'app-me',
  templateUrl: './me.page.html',
  styleUrls: ['./me.page.scss'],
})
export class MePage implements OnInit {
  constructor(private siteService: SiteService) { }

  works: Work[];
  cv;
  selectedWork: Work[] = [];

  ngOnInit() {
    // get works
    this.works = this.siteService.works;
    // get cv
    this.cv = this.siteService.cv;
  }

  onClickWork(work) {
    this.selectedWork.pop() // remove content
    this.selectedWork.push(work) // add new content
  }
}
