import { FC, useEffect } from "react";

const AngularMFEComponentWrapper: FC = (): JSX.Element => {
  useEffect(() => {
    import("angularMfe/AngularMFEModule");
  }, []);

  return <>
    <angular-mfe></angular-mfe>
  </>
}

export default AngularMFEComponentWrapper;