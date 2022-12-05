import {Directive, HostListener, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHoverClass]'
})
export class HoverClassDirective {

  constructor( public elementRef: ElementRef, private render: Renderer2 ) {
  }

  @HostListener( 'mouseenter' ) onMouseEnter() {
      this.add( 'active' );
  }

  @HostListener( 'mouseleave' ) onMouseLeave() {
      this.remove( 'active' );
  }

  add( action: string ): void {
    this.render.addClass(this.elementRef.nativeElement, action)
      //this.hoverClass.split( ' ' ).forEach( (item: any) => this.elementRef.nativeElement.classList[action]( item ) );
  }
  remove( action: string ): void {
    this.render.removeClass(this.elementRef.nativeElement, action)
  }

}
