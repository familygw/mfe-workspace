import { AfterViewInit, Component, ElementRef, Injector, OnInit, QueryList, ViewChild, ViewChildren, ViewContainerRef } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements AfterViewInit {
  @ViewChild("angularPlaceholder", { read: ViewContainerRef }) angularPlaceholder: ViewContainerRef;
  @ViewChildren("reactPlaceholder", { read: ElementRef }) reactPlaceholder: QueryList<ElementRef>;

  constructor(
    private injector: Injector
  ) { }

  async ngAfterViewInit(): Promise<void> {
    const { AngularMFEComponentStandalone } = await import("angularMfe/AngularMFEComponent");
    this.angularPlaceholder.createComponent(AngularMFEComponentStandalone);

    await import("reactMfe/ReactMFEComponent");
    this.reactPlaceholder.forEach(ph => {
      const el = document.createElement("react-mfe-component");
      ph.nativeElement.appendChild(el)
    });
  }
}
