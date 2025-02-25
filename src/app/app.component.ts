import {
  AfterViewInit,
  Component,
  ViewChild,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  selectedPosition: 'top' | 'bottom' | 'left' | 'right' = 'top';
  selectedBgColor: string = '#002329';
  selectedFontColor: string = '#87e8de';
  selectedFontSize: string = '20px';

  @ViewChild('tooltipElement') tooltipElement!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.updateTooltipStyles();
  }

  updateTooltipStyles() {
    if (this.tooltipElement) {
      this.renderer.setStyle(
        this.tooltipElement.nativeElement,
        'backgroundColor',
        this.selectedBgColor
      );
      this.renderer.setStyle(
        this.tooltipElement.nativeElement,
        'color',
        this.selectedFontColor
      );
      this.renderer.setStyle(
        this.tooltipElement.nativeElement,
        'fontSize',
        this.selectedFontSize
      );
    }
  }
}
