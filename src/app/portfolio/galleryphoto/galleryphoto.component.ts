import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-galleryphoto',
  templateUrl: './galleryphoto.component.html',
  styleUrls: ['./galleryphoto.component.css']
})
export class GalleryphotoComponent implements OnInit {
  @Input() photoDescription:any={};
  constructor() { }

  ngOnInit() {
  }

}
