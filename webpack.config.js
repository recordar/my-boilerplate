const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');
const { realpathSync } = require('fs');

const appDirectory = realpathSync(process.cwd());
const resolveApp = relativePath => resolve(appDirectory, relativePath);

module.exports = {
  entry: './index.js',
  devtool: 'inline-source-map',
  mode: 'development',
  output: {
    path: resolve(__dirname, './dist/src'),
    filename: 'bundle.js',
  },
  devServer: {
    port: 9000,
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        include: resolveApp('src'),
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-typescript'],
          plugins: [
            '@babel/proposal-class-properties',
            '@babel/proposal-object-rest-spread',
          ],
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
  ],
};
