import { Component, OnInit } from '@angular/core';
import { LayoutDataService } from '../layoutdata.service';
import { ContentDataService } from '../contentdata.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  contentData:any={}
  constructor(private layoutDataService:LayoutDataService, private contentDataService:ContentDataService) { 
    
  }

  ngOnInit() {
    this.contentData = this.contentDataService.getSectionContent("about");
    
  }

}
