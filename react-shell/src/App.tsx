import { FC } from 'react';
import './App.scss';
import ReactMFEComponentWrapper from "./wrappers/ReactMFEComponentWrapper";
import AngularMFEComponentWrapper from "./wrappers/AngularMFEModuleWrapper";

const App: FC = (): JSX.Element => {
  return <>
    <div>
      <h1>Hello World</h1>
      <ReactMFEComponentWrapper />
      <AngularMFEComponentWrapper />
    </div>
  </>;
}

export default App;
