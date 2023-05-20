import { FC, useEffect } from "react";

const AngularMFEComponentWrapper: FC = (): JSX.Element => {
  useEffect(() => {
    (async () => {
      const { doBootstrap } = await import("angularMfe/AngularMFEModule");
      doBootstrap();
    })();
  }, []);

  return <>
    <angular-mfe></angular-mfe>
  </>
}

export default AngularMFEComponentWrapper;