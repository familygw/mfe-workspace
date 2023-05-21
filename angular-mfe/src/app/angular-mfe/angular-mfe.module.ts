import { ApplicationRef, DoBootstrap, NgModule } from "@angular/core";

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { debounce } from "lodash";
import { CommonMFEModule } from "./common.module";
import { AngularMFEComponent } from "./component-1/angular-mfe.component";
import { UserDetailsMFEComponent } from "./user-details/user-details.component";

let __angular_mfe_module_bootstraped: boolean = false;

@NgModule({
  declarations: [
    AngularMFEComponent,
    UserDetailsMFEComponent
  ],
  imports: [
    CommonMFEModule
  ]
})
export class AngularMFEModule implements DoBootstrap {
  ngDoBootstrap(appRef: ApplicationRef): void {
    appRef.bootstrap(AngularMFEComponent);
    appRef.bootstrap(UserDetailsMFEComponent)
  }
};

/**
 * debounce doBoostrap method to avoid multiple initialization at the same time
 */
export const doBootstrap = debounce((): void => {
  // if (__angular_mfe_module_bootstraped) return;

  platformBrowserDynamic()
    .bootstrapModule(AngularMFEModule)
    .then(() => (__angular_mfe_module_bootstraped = true))
    .catch(err => console.error(err));
}, 10);