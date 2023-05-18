import webpack, { Configuration as WebpackConfig } from "webpack";
import { CracoConfig } from "@craco/types";
import packageJson from "./package.json";

const dependencies = packageJson.dependencies;
const ModuleFederationPlugin = webpack.container.ModuleFederationPlugin;

const cracoConfig: CracoConfig = {
  webpack: {
    configure: (webpackConfig) => {

      const plugins = [
        ...(webpackConfig.plugins || []),
        new ModuleFederationPlugin({
          name: "reactMfe",
          filename: "remoteEntry.js",
          exposes: {
            "./ReactMfeComponent": "./src/components/react-mfe-component"
          },
          shared: {
            ...dependencies,
            react: { singleton: true, requiredVersion: dependencies["react"] },
            "react-dom": { singleton: true, requiredVersion: dependencies["react-dom"] },
            "typescript": { singleton: true, requiredVersion: dependencies["typescript"] }
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