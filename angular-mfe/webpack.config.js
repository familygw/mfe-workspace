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
    uniqueName: "taxGTPWui",
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
      name: "taxGTPWui",
      filename: "remoteEntry.js",
      exposes: {
        "./MFEMyTasksModule": "./src/app/mfe-modules/mfe-my-tasks.module.ts",
        "./MFEMyTasksComponent": "./src/app/mfe-modules/mfe-my-tasks/mfe-my-tasks-sa.component.ts",
        "./MFEDeliverableDetailsModule": "./src/app/mfe-modules/mfe-deliverable-details.module.ts",
        "./MFEDeliverableDiagramModule": "./src/app/mfe-modules/mfe-deliverable-diagram.module.ts",
        "./MFEDeliverableDetailsComponent": "./src/app/mfe-modules/mfe-deliverable-details/mfe-deliverable-details-sa.component.ts"
      },
      shared: share({
        ...shareAll({ singleton: true, strictVersion: false, requiredVersion: "auto" }),
        ...sharedMappings.getDescriptors()
      })

    }),
    sharedMappings.getPlugin()
  ],
};
