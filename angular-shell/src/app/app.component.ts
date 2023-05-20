import { AfterViewInit, Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements AfterViewInit {
  async ngAfterViewInit(): Promise<void> {
    // const { doBootstrap } = await import("angularMfe/AngularMFEComponent");
    setTimeout(async () => {
      // await import("reactMfe/ReactMFEComponent");
      await import("angularMfe/AngularMFEComponent");
    }, 1500);
    //console.log(">>>>>>>>>>>", m);
  }
}
