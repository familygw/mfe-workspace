const { withModuleFederationPlugin, shareAll } = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "angularMfe",
  filename: "remoteEntry.js",
  exposes: {
    "./AngularMFEModule": "./src/app/angular-mfe/angular-mfe.module.ts",
    "./AngularMFEComponentStandalone": "./src/app/angular-mfe/angular-mfe.s.component.ts",
    "./UserDetailsMFEComponentStandalone": "./src/app/angular-mfe/user-details.s.component.ts",
    "./AngularMFEVanillaMount": "./src/app/angular-mfe/vanilla-mount.ts"
  },
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: "auto" })
  }
});
