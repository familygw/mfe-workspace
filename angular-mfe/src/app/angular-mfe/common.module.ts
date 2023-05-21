import { CommonModule, NgIf } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import "zone.js";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [
    NgIf
  ]
})
export class CommonMFEModule {

}