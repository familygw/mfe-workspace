import { loadRemoteModule } from "@angular-architects/module-federation";
import { AfterViewInit, Component, ElementRef, ViewChild, ViewContainerRef } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements AfterViewInit {
  @ViewChild("angularPlaceholder", { read: ViewContainerRef }) angularPlaceholder: ViewContainerRef;
  @ViewChild("userDetailsPlaceholder", { read: ViewContainerRef }) userDetailsPlaceholder: ViewContainerRef;
  @ViewChild("reactPlaceholder", { read: ElementRef }) reactPlaceholder: ElementRef;

  constructor(
  ) { }

  async ngAfterViewInit(): Promise<void> {
    const { AngularMFEComponentStandalone } = await loadRemoteModule({
      type: "module",
      remoteEntry: "http://localhost:4201/remoteEntry.js",
      exposedModule: "./AngularMFEComponentStandalone"
    });
    const { UserDetailsMFEComponentStandalone } = await loadRemoteModule({
      type: "module",
      remoteEntry: "http://localhost:4201/remoteEntry.js",
      exposedModule: "./UserDetailsMFEComponentStandalone"
    });

    this.angularPlaceholder.createComponent(AngularMFEComponentStandalone);
    this.userDetailsPlaceholder.createComponent(UserDetailsMFEComponentStandalone);

    // const { ReactMFEComponent } = await loadRemoteModule({
    //   type: "module",
    //   remoteEntry: "http://localhost:5301/remoteEntry.js",
    //   exposedModule: "./ReactMFEComponent"
    // });
    // console.log("ReactMFEComponent", ReactMFEComponent);
  }
}
