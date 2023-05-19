const { share, shareAll, withModuleFederationPlugin } = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "angularMfe",
  filename: "remoteEntry.js",
  exposes: {
    "./AngularMFEModule": "./src/app/angular-mfe/angular-mfe.module",
    // "./AngularMFEModule": "./src/app/app.module",
  },
  shared: {
    ...shareAll({ singleton: true, strictVersion: false, requiredVersion: "auto" }),
    ...share({ "zone.js": { singleton: true, strictVersion: false, requiredVersion: "auto " } })
  },
});
