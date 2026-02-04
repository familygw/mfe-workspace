import { createApplication } from "@angular/platform-browser";
import { appConfig } from "../app.config";
import { AngularMFEComponentStandalone } from "./angular-mfe.s.component";

export type VanillaMountTarget = string | Element;

export async function mount(target: VanillaMountTarget): Promise<void> {
  const element = typeof target === "string" ? document.querySelector(target) : target;
  if (!element) {
    throw new Error("Mount target was not found.");
  }

  // Create an Angular application instance and bootstrap the standalone component.
  const appRef = await createApplication(appConfig);
  appRef.bootstrap(AngularMFEComponentStandalone, element);
}
