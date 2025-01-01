import { Component } from "@angular/core";
import { CommonMFEModule } from "./common.module";
import { UserDetailsMFEComponent } from "./user-details/user-details.component";

@Component({
  selector: "app-user-details",
  templateUrl: "./user-details/user-details.component.html",
  styleUrls: ["./user-details/user-details.component.scss"],
  imports: [
    CommonMFEModule
  ]
})
export class UserDetailsMFEComponentStandalone extends UserDetailsMFEComponent {
}