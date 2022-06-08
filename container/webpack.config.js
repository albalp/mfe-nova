const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); // only add this if you don't have yet
const { ModuleFederationPlugin } = webpack.container;

const deps = require('./package.json').dependencies;

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  console.log({ isProduction });
  return {
    mode: process.env.NODE_ENV || 'development',
    output: {
        publicPath: "http://localhost:3000/",
    },
    devServer: {
      port: 3000,
      open: true,
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx',],
    },
    module: {
      rules: [

          // Rule for React
          {
              test: /\.(js|jsx|ts|tsx)$/,
              exclude: /node_modules/,
              loader:'babel-loader',
              options: {
                  presets: [
                      [
                          '@babel/preset-react',
                          {
                              runtime: 'automatic'
                          }
                      ]
                  ]
              }
          },

          // Rule for Styles
          {
              test: /\.css$/,
              use: ['style-loader', 'css-loader']

          },

      ]
  },

    plugins: [
      // new webpack.DefinePlugin({
      //   'process.env': JSON.stringify(process.env),
      // }),
      new ModuleFederationPlugin({
        name: 'container',
        remotes: {
          header: 'header@http://localhost:3003/remoteEntry.js',
          modal: 'modal@http://localhost:3001/remoteEntry.js',
          calendar: "calendar@http://localhost:5000/remoteEntry.js",
        },
        shared: {
          ...deps,
          react: { singleton: true, eager: true, requiredVersion: deps.react },
          'react-dom': {
            singleton: true,
            eager: true,
            requiredVersion: deps['react-dom'],
          },
        },
      }),
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
    ],
  };
};