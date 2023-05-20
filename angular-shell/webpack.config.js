const { withModuleFederationPlugin } = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  remotes: {
    "angularMfe": "http://localhost:4201/remoteEntry.js"
  }
});
