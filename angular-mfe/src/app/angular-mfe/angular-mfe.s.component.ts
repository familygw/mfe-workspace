import { Component } from "@angular/core";
import { CommonMFEModule } from "./common.module";
import { AngularMFEComponent } from "./component-1/angular-mfe.component";

@Component({
  selector: "angular-mfe",
  templateUrl: "./component-1/angular-mfe.component.html",
  styleUrls: ["./component-1/angular-mfe.component.scss"],
  standalone: true,
  imports: [
    CommonMFEModule
  ]
})
export class AngularMFEComponentStandalone extends AngularMFEComponent {
}
