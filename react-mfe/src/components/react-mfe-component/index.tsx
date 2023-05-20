import ReactDOM from "react-dom/client";
import { FC } from "react";
import styles from "./styles.module.scss";

let __mfe_cache: WeakMap<Element, ReactDOM.Root> = new WeakMap();

const ReactMFEComponent: FC = (): JSX.Element => {
  return <>
    <div className={styles.div}>Hi I'm a Remote Component</div>
  </>;
}

class HTMLReactMFEComponent extends HTMLElement {
  connectedCallback() {
    const elements = document.getElementsByTagName("react-mfe-component");
    if (!!elements && !!elements.length) {
      for (const elm of elements) {
        let cachedElement = __mfe_cache.get(elm);
        !cachedElement && (__mfe_cache.set(elm, ReactDOM.createRoot(elm)));

        __mfe_cache.get(elm)!.render(<ReactMFEComponent />);
      }
    }
  }
  disconnectedCallback() {
    __mfe_cache = new WeakMap<Element, ReactDOM.Root>();
    const elements = document.getElementsByTagName("react-mfe-component");
    for (const elm of elements)
      __mfe_cache.set(elm, ReactDOM.createRoot(elm));
  }
}

customElements.define("react-mfe-component", HTMLReactMFEComponent);
export default ReactMFEComponent;