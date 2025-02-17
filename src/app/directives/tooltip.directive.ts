import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appTooltip]',
})
export class TooltipDirective implements OnInit, OnChanges {
  @Input('appTooltip') tooltipContent: string = 'Customised Tooltip!';
  @Input() tooltipPosition: 'top' | 'bottom' | 'left' | 'right' = 'top';
  @Input() tooltipBackgroundColor: string = '#002329';
  @Input() tooltipFontColor: string = '#87e8de';
  @Input() tooltipFontSize: string = '20px';

  private tooltip: HTMLElement | null = null;

  constructor(private eleRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.createTooltip();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.tooltip) {
      if (changes['tooltipBackgroundColor']) {
        this.renderer.setStyle(
          this.tooltip,
          'backgroundColor',
          this.tooltipBackgroundColor
        );
      }
      if (changes['tooltipFontColor']) {
        this.renderer.setStyle(this.tooltip, 'color', this.tooltipFontColor);
      }
      if (changes['tooltipFontSize']) {
        this.renderer.setStyle(this.tooltip, 'fontSize', this.tooltipFontSize);
      }
      if (changes['tooltipPosition']) {
        this.setPositionStyles();
      }
    }
  }

  ngOnDestroy() {
    if (this.tooltip) {
      this.renderer.removeChild(this.eleRef.nativeElement, this.tooltip);
    }
  }

  private createTooltip() {
    this.tooltip = document.createElement('span');
    this.renderer.appendChild(
      this.tooltip,
      this.renderer.createText(this.tooltipContent)
    );

    Object.assign(this.tooltip.style, {
      position: 'absolute',
      backgroundColor: this.tooltipBackgroundColor,
      padding: '5px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      fontSize: this.tooltipFontSize,
      color: this.tooltipFontColor,
      display: 'none',
      zIndex: '1000',
      transform: 'translateX(-50%)',
      whiteSpace: 'nowrap',
    });

    this.setPositionStyles();
    this.renderer.appendChild(this.eleRef.nativeElement, this.tooltip);
  }

  private setPositionStyles() {
    if (!this.tooltip) return;

    if (this.tooltip) {
      this.tooltip.style.top = '';
      this.tooltip.style.bottom = '';
      this.tooltip.style.left = '';
      this.tooltip.style.right = '';

      switch (this.tooltipPosition) {
        case 'top':
          this.renderer.setStyle(this.tooltip, 'left', '50%');
          this.renderer.setStyle(this.tooltip, 'bottom', '100%');
          break;
        case 'bottom':
          this.renderer.setStyle(this.tooltip, 'top', '100%');
          this.renderer.setStyle(this.tooltip, 'left', '50%');
          break;
        case 'right':
          this.renderer.setStyle(this.tooltip, 'top', '-50%');
          this.renderer.setStyle(this.tooltip, 'right', '20%');
          break;
        case 'left':
          this.renderer.setStyle(this.tooltip, 'top', '-50%');
          this.renderer.setStyle(this.tooltip, 'left', '35%');
          break;
      }
    }
  }

  @HostListener('mouseenter') onMouseEnter() {
    if (this.tooltip) {
      this.renderer.setStyle(this.tooltip, 'display', 'block');
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.tooltip) {
      this.renderer.setStyle(this.tooltip, 'display', 'none');
    }
  }
}
