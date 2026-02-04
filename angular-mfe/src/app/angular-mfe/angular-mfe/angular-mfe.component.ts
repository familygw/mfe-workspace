import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";

@Component({
  standalone: false,
  selector: "angular-mfe",
  templateUrl: "./angular-mfe.component.html",
  styleUrls: ["./angular-mfe.component.scss"]
})
export class AngularMFEComponent {
  get user(): string { return this.authService.user(); }

  constructor(
    private authService: AuthService
  ) { }

  doLogin(): void {
    this.authService.doLogin("Dummy User!");
  }

  doLogout(): void {
    this.authService.doLogin("");
  }
}
