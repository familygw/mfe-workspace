const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const { share, shareAll } = mf;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, "tsconfig.json"),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "angularMfe",
    publicPath: "auto",
    scriptType: "text/javascript",
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "angularMfe",
      filename: "remoteEntry.js",
      exposes: {
        "./AngularMFEModule": "./src/app/angular-mfe/angular-mfe.module.ts",
        "./AngularMFEComponentStandalone": "./src/app/angular-mfe/angular-mfe.s.component.ts",
        "./UserDetailsMFEComponentStandalone": "./src/app/angular-mfe/user-details.s.component.ts"
      },
      shared: share({
        ...shareAll({ singleton: true, strictVersion: false, requiredVersion: "auto" }),
        ...sharedMappings.getDescriptors(),
      })
    }),
    sharedMappings.getPlugin()
  ],
};
