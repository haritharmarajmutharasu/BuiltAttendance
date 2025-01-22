const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './index.js', // Entry point of your application
  target: 'node', // Target the Node.js environment
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js', // Output bundled file
  },
  externals: [nodeExternals()], // Exclude Node modules from the bundle
  mode: 'production', // Set to 'production' for minification
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Optional if you want to use Babel
        },
      },
    ],
  },
};
