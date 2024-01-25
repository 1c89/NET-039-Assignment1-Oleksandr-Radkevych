import { Directive,ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2 } from '@angular/core';

@Directive({
  selector: '[appReviewScrollbuttons]'
})
export class ReviewScrollbuttonsDirective {

  @Input() default = 'green';
  @Input('appHighlight') highlighted = 'pink';

  @HostBinding('class.boxShadow') isHover = false;
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') mouseover() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      this.default
    );
    this.isHover = true;
  }

  @HostListener('mouseleave') mouseleave() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      this.highlighted
    );
    this.isHover = false;
  }

}
