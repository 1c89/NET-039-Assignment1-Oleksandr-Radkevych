import { Component, OnInit } from '@angular/core';
import { ILayout, LayoutDataService } from '../layoutdata.service';
import { ContentDataService } from '../contentdata.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  navigationBarStructure: ILayout[] = new Array<ILayout>();
  contentData: any = {};
  constructor(
    private layoutService: LayoutDataService,
    private contentService: ContentDataService
  ) {}

  ngOnInit() {
    this.navigationBarStructure =
      this.layoutService.getNavigationBarParameters();
    this.contentData = this.contentService.getSectionContent('personal');
  }
}
