const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path"); //Método de node para resolver la ruta absoluta
const webpack = require("webpack");
const { ModuleFederationPlugin } = webpack.container;
const deps = require("./package.json").dependencies;
module.exports = {
  entry: "./src/index.js",
  output: {
    publicPath: "http://localhost:3000", //Este output es porque queremos que la carpeta por default de salida que tiene el nombre de dist se cambie al que aquí especifiqumos usando métodos de node
  },
  devServer: {
    open: true,
    port: 3000,
    historyApiFallback: true,
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-react",
              {
                runtime: "automatic", // This is the configuration that allows you not to import React from 'react' It's a good practice
              },
            ],
          ],
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    // new webpack.DefinePlugin({
    // 'process.env': JSON.stringify(process.env),
    // }),
    new ModuleFederationPlugin({
      name: "container",

      remotes: {
        modal: "modal@http://localhost:3001/",
      },

      shared: {
        ...deps,

        react: { singleton: true, eager: true, requiredVersion: deps.react },

        "react-dom": {
          singleton: true,

          eager: true,

          requiredVersion: deps["react-dom"],
        },
      },
    }),

    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
