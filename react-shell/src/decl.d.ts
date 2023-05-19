declare module "angularMfe/AngularMFEModule" { }

declare module "reactMfe/ReactMFEComponent" {
  const ReactMFEComponent: React.ComponentType;
  export default ReactMFEComponent;
}

declare namespace JSX {
  interface IntrinsicElements {
    "angular-mfe": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
  }
}