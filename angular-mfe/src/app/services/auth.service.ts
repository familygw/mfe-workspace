import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private _user: string;

  get user(): string { return this._user; }

  constructor() { }

  doLogin(user: string) {
    this._user = user;
  }

}
