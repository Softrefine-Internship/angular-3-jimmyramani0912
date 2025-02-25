import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTooltip]',
})
export class TooltipDirective {
  private tooltipElement: HTMLElement | null = null;

  constructor(private eleRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    if (!this.tooltipElement) {
      this.tooltipElement = this.eleRef.nativeElement.previousElementSibling;
    }
    if (this.tooltipElement) {
      this.renderer.setStyle(this.tooltipElement, 'display', 'block');
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.tooltipElement) {
      this.renderer.setStyle(this.tooltipElement, 'display', 'none');
    }
  }
}
