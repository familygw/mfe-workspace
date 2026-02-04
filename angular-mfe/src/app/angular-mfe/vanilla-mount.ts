import { createApplication } from "@angular/platform-browser";
import { appConfig } from "../app.config";
import { AngularMFEComponentStandalone } from "./angular-mfe.s.component";
import { UserDetailsMFEComponentStandalone } from "./user-details.s.component";
import { AuthService } from "../services/auth.service";

export type VanillaMountTarget = string | Element;
export type VanillaMountTargets = {
  angular: VanillaMountTarget;
  userDetails: VanillaMountTarget;
};

function resolveTarget(target: VanillaMountTarget, label: string): Element {
  const element = typeof target === "string" ? document.querySelector(target) : target;
  if (!element) {
    throw new Error(`${label} mount target was not found.`);
  }
  return element;
}

export async function mount(targets: VanillaMountTargets): Promise<void> {
  const angularTarget = resolveTarget(targets.angular, "AngularMFEComponentStandalone");
  const userDetailsTarget = resolveTarget(targets.userDetails, "UserDetailsMFEComponentStandalone");

  // Create a single Angular application instance and bootstrap both components.
  const appRef = await createApplication(appConfig);
  appRef.bootstrap(AngularMFEComponentStandalone, angularTarget);
  appRef.bootstrap(UserDetailsMFEComponentStandalone, userDetailsTarget);
}
