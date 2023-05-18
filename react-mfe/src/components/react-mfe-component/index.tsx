import { FC } from "react";
import styles from "./styles.module.scss";

const ReactMfeComponent: FC = (): JSX.Element => {
  return <>
    <div className={styles.div}>Hi I'm a Remote Component</div>
  </>;  
}

export default ReactMfeComponent;