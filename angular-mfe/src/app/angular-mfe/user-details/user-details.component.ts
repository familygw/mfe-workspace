import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";

@Component({
  standalone: false,
  selector: "app-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.scss"]
})
export class UserDetailsMFEComponent {
  get user(): string { return this.authService.user; }

  constructor(
    private authService: AuthService
  ) { }
}
