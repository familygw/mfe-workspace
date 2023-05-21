import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren, ViewContainerRef } from "@angular/core";
import { AngularMFEModule } from "angularMfe/AngularMFEModule";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements AfterViewInit {
  @ViewChild("angularPlaceholder", { read: ViewContainerRef }) angularPlaceholder: ViewContainerRef;
  @ViewChild("userDetailsPlaceholder", { read: ViewContainerRef }) userDetailsPlaceholder: ViewContainerRef;
  @ViewChildren("reactPlaceholder", { read: ElementRef }) reactPlaceholder: QueryList<ElementRef>;

  constructor(
  ) { }

  async ngAfterViewInit(): Promise<void> {
    for (const cmp of AngularMFEModule.ɵmod.declarations) {

      if (cmp.prototype.constructor.name === "AngularMFEComponent")
        this.angularPlaceholder.createComponent(cmp);

      if (cmp.prototype.constructor.name === "UserDetailsMFEComponent")
        this.userDetailsPlaceholder.createComponent(cmp);
    }

    await import("reactMfe/ReactMFEComponent");
    this.reactPlaceholder.forEach(ph => {
      const el = document.createElement("react-mfe-component");
      ph.nativeElement.appendChild(el)
    });
  }
}
