const { withModuleFederationPlugin, shareAll } = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "angularShell",
  remotes: {
    angularMfe: "angularMfe@http://localhost:4201/remoteEntry.js"
  },
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: "auto" })
  }
});
