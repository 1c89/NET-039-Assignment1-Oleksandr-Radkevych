import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-social-media-btn',
  templateUrl: './social-media-btn.component.html',
  styleUrls: ['./social-media-btn.component.css']
})
export class SocialMediaBtnComponent implements OnInit {
  @Input() socialMediaContent:any;
  @Input() btnClass:string= "";
  constructor() { }

  ngOnInit() {
  }
  RedirectToExternalResource(link:string){
    window.open(link, '_blank'); 
  }
}
