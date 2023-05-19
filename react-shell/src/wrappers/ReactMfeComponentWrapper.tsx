import { FC, useEffect } from "react";
import ReactMFEComponent from "reactMfe/ReactMFEComponent";

const ReactMFEComponentWrapper: FC = (): JSX.Element => {
  useEffect(() => {
    import("reactMfe/ReactMFEComponent");
  }, []);

  return <>
    <ReactMFEComponent></ReactMFEComponent>
  </>
}

export default ReactMFEComponentWrapper;