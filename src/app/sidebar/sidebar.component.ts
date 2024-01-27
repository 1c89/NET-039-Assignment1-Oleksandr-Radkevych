import { Component, OnInit } from '@angular/core';
import { LayoutDataService } from '../layoutdata.service';
import { ContentDataService } from '../contentdata.service';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit 
{
    navigationBarStructure:any[]=[];
    contentData:any={};
    constructor(private layoutService: LayoutDataService, private contentService: ContentDataService) { }

    ngOnInit() 
    {
      this.navigationBarStructure = this.layoutService.getNavigationBarParameters();
      this.contentData = this.contentService.getSectionContent("personal");
    }

}
