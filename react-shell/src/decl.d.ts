declare module "angularMfe/AngularMFEModule" {
  export const doBootstrap: () => void;
}

declare module "reactMfe/ReactMFEComponent" {
  const ReactMFEComponent: React.ComponentType;
  export default ReactMFEComponent;
}

declare namespace JSX {
  interface IntrinsicElements {
    "angular-mfe": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
  }
}