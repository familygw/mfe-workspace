import "zone.js";
import { ApplicationRef, DoBootstrap, NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AngularMFEComponent } from "./angular-mfe.component";

@NgModule({
  declarations: [
    AngularMFEComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ]
})
export class AngularMFEModule implements DoBootstrap {
  ngDoBootstrap(appRef: ApplicationRef): void {
    appRef.bootstrap(AngularMFEComponent);
  }
};

export const doBootstrap = (): void => {
  platformBrowserDynamic().bootstrapModule(AngularMFEModule)
    .catch(err => console.error(err));
};