import { FC } from 'react';
import './App.scss';
import ReactMFEComponentWrapper from "./wrappers/ReactMFEComponentWrapper";
import { AngularMFEComponentWrapper, UserDetailsMFEComponentWrapper } from "./wrappers/AngularMFEModuleWrapper";

const App: FC = (): JSX.Element => {
  return <>
    <div>
      <h1>Hello World :: From React</h1>
      <ReactMFEComponentWrapper />
      <AngularMFEComponentWrapper />
      <UserDetailsMFEComponentWrapper />
    </div>
  </>;
}

export default App;
