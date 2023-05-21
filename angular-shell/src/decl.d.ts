declare module "angularMfe/AngularMFEModule" {
  import { Type } from "@angular/core";

  export const AngularMFEModule: {
    ɵmod: {
      declarations: Type<any>[]
    }, [key: string]: any
  };

  export const doBootstrap: () => void;
}

declare module "angularMfe/AngularMFEComponentStandalone";
declare module "angularMfe/UserDetailsMFEComponentStandalone";
declare module "reactMfe/ReactMFEComponent";
