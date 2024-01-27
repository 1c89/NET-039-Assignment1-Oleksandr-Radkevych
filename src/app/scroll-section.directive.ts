import { Directive,ElementRef,Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ScrollManager } from './scroll-manager.directive';

@Directive({
  selector: '[appScrollSection]'
})
export class ScrollSection implements OnInit, OnDestroy{
  
  @Input('appScrollSection') id: string | number = '';

  constructor(private scrollManager:ScrollManager, private hostElement:ElementRef<HTMLElement>, private rendrer: Renderer2) {

   }

   ngOnInit(): void {
      this.scrollManager.addSection(this);
    
   }
   
   ngOnDestroy(): void {
     this.scrollManager.delSection(this);
   }
   
   scroll() {
      this.hostElement.nativeElement.scrollIntoView({behavior:'smooth'})
      //this.rendrer.
   }

}
