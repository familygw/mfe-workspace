import { FC, useEffect } from "react";
import ReactMfeComponent from "reactMfe/ReactMfeComponent";

const ReactMfeComponentWrapper: FC = (): JSX.Element => {
  useEffect(() => {
    import("reactMfe/ReactMfeComponent");
  }, []);

  return <>
    <ReactMfeComponent></ReactMfeComponent>
  </>
}

export default ReactMfeComponentWrapper;