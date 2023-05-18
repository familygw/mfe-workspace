import { FC, Suspense } from 'react';
import './App.scss';
import ReactMfeComponentWrapper from "./wrappers/ReactMfeComponentWrapper";

const App: FC = (): JSX.Element => {
  return <>
    <div>
      <h1>Hello World</h1>
      <ReactMfeComponentWrapper />
    </div>
  </>;
}

export default App;
