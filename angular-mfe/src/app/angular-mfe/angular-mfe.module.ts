import { NgModule } from '@angular/core';

import { CommonModule } from "@angular/common";
import { AngularMFEComponent } from "./angular-mfe.component";

@NgModule({
  declarations: [
    AngularMFEComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AngularMFEModule { }

// export class AngularMFEModule {
//   ngDoBootstrap(appRef: ApplicationRef): void {
//     appRef.bootstrap(AngularMFEComponent);
//   }
// }

// const doBootstrap = (): void => {
//   platformBrowserDynamic().bootstrapModule(AngularMFEModule)
//     .catch(err => console.error(err));
// }
// export default doBootstrap;