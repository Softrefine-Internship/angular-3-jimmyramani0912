import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight.directive';
import { TrimDirective } from './directives/trim.directive';
@NgModule({
  declarations: [AppComponent, HighlightDirective, TrimDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
