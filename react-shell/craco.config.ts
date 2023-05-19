import webpack, { Configuration as WebpackConfig } from "webpack";
import { CracoConfig } from "@craco/types";

const ModuleFederationPlugin = webpack.container.ModuleFederationPlugin;

const cracoConfig: CracoConfig = {
  webpack: {
    configure: (webpackConfig) => {

      const plugins = [
        ...(webpackConfig.plugins || []),
        new ModuleFederationPlugin({
          remotes: {
            angularMfe: "angularMfe@http://localhost:4201/remoteEntry.js",
            reactMfe: "reactMfe@http://localhost:5301/remoteEntry.js"
          }
        })
      ];

      webpackConfig.output!.publicPath = "auto";
      const config: WebpackConfig = {
        ...webpackConfig,
        plugins
      };

      return config;
    },
  },
};

export default cracoConfig;