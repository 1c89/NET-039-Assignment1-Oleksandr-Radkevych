import { Component, OnInit } from '@angular/core';
import { ContentDataService } from '../contentdata.service';
import { LayoutDataService } from '../layoutdata.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  
  layoutData:any={};
  contentData:any={};
  currentPage:number=0;
  
  constructor(private layoutDataService:LayoutDataService, private contentDataService:ContentDataService) { 

  }
  currentContent()
  {
    return this.contentData.endorsments[this.currentPage];
  }

  nextPage(direction:number){
    
    if (this.currentPage == (this.contentData.endorsments.length-1) && direction > 0) 
      this.currentPage = 0;
    else if (this.currentPage == 0 && direction < 0) 
      this.currentPage = this.contentData.endorsments.length-1;
    else 
      this.currentPage+=direction;
   }
 
   ngOnInit() {
      this.layoutData = this.layoutDataService.getSectionParameters("review");
      this.contentData = this.contentDataService.getSectionContent("review");
  }

}
