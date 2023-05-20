import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { BrowserModule, bootstrapApplication } from "@angular/platform-browser";

@Component({
  selector: "angular-mfe",
  templateUrl: "./angular-mfe.component.html",
  styleUrls: ["./angular-mfe.component.scss"],
  standalone: true,
  imports: [
    CommonModule,
    BrowserModule
  ]
})
export class AngularMFEComponentStandalone {
}

export const doBootstrap = (): void => {
  bootstrapApplication(AngularMFEComponentStandalone);
};