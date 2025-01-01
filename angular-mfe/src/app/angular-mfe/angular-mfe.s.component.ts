import { Component } from "@angular/core";
import { CommonMFEModule } from "./common.module";
import { AngularMFEComponent } from "./angular-mfe/angular-mfe.component";

@Component({
  selector: "angular-mfe-standalone",
  templateUrl: "./angular-mfe/angular-mfe.component.html",
  styleUrls: ["./angular-mfe/angular-mfe.component.scss"],
  imports: [
    CommonMFEModule
  ]
})
export class AngularMFEComponentStandalone extends AngularMFEComponent {
}
