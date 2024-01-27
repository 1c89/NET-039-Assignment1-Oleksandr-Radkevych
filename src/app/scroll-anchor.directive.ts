import { Directive,HostListener,Input } from '@angular/core';
import { ScrollManager } from './scroll-manager.directive';

@Directive({
  selector: '[appScrollAnchor]'
})

export class ScrollAnchor {
  
  @Input('appScrollAnchor') anchorId:string|number ="";

  constructor(private scrollManager:ScrollManager) {

  }

  @HostListener('click')
  scroll()
  {
    this.scrollManager.scrollToSection(this.anchorId)
  }

}
