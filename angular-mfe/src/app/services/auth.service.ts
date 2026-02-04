import { Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private _user = signal<string>("");

  user(): string {
    return this._user();
  }

  constructor() { }

  doLogin(user: string) {
    this._user.set(user);
  }

}
