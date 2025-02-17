import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  selectedPosition: 'top' | 'bottom' | 'left' | 'right' = 'top';
  selectedBgColor: string = '#002329';
  selectedFontColor: string = '#87e8de';
  selectedFontSize: string = '20px';
}
