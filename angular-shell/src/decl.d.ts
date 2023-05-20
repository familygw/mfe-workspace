declare module "angularMfe/AngularMFEModule";
declare module "angularMfe/AngularMFEComponent";
//  {
//   export const doBootstrap: () => void;
// }

declare module "reactMfe/ReactMFEComponent" {
  import { ComponentRef } from "@angular/core";

  const ReactMFEComponent: ComponentRef<any>;
  export default ReactMFEComponent;
}
