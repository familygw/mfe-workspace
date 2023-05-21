import { doBootstrap } from "angularMfe/AngularMFEModule";
import { FC, useEffect } from "react";

export const AngularMFEComponentWrapper: FC = (): JSX.Element => {
  useEffect(() => doBootstrap(), []);

  return <>
    <angular-mfe></angular-mfe>
  </>
}

export const UserDetailsMFEComponentWrapper: FC = (): JSX.Element => {
  useEffect(() => doBootstrap(), []);

  return <>
    <app-user-details></app-user-details>
  </>
}
