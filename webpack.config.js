const path = require('path');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
   mode: 'development',
   entry: './app.js',
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      library: 'home'
   },
   devtool: NODE_ENV === 'development' ? "cheap-inline-module-source-map" : null,
   watch: NODE_ENV === 'development',
   watchOptions: {
      aggregateTimeout: 300
   }
};