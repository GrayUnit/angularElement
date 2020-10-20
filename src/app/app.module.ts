import { BrowserModule } from '@angular/platform-browser';
import { ApplicationRef, Injector, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialButtonComponent } from './social-button/social-button.component';
import { environment } from 'src/environments/environment';
import { createCustomElement } from '@angular/elements';
import { ListSelectorComponent } from './list-selector/list-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    SocialButtonComponent,
    ListSelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents: [
    AppComponent,
    SocialButtonComponent,
    ListSelectorComponent
  ]
})
export class AppModule {

  constructor(private injector: Injector) {}

  ngDoBootstrap(app: ApplicationRef) {
    if(environment.production) {
      const socialButtonElement = createCustomElement(SocialButtonComponent, {injector: this.injector})
      customElements.define('social-button', socialButtonElement);
      const listSelectorElement = createCustomElement(ListSelectorComponent, {injector: this.injector})
      customElements.define('list-selector', listSelectorElement);
    } else {
      app.bootstrap(AppComponent);
    }
  }
}
