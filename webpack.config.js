const 
     path = require('path'),
     webpack = require('webpack'),
   //  UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
     NODE_ENV = 'development';     

module.exports = {
   mode: NODE_ENV,//'production, development',
   context: __dirname + '/frontend',
   entry: {
      home: './home',
      contact: './contact',
      about: './about'
   },
   output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'public'),
      library: '[name]'
   },
   devtool: NODE_ENV === 'development' ? "cheap-inline-module-source-map" : 'none',
   watch: NODE_ENV === 'development',
   watchOptions: {
      aggregateTimeout: 300
   },
   plugins: [
      new webpack.DefinePlugin({
         NODE_ENV: JSON.stringify(NODE_ENV)
      })
   ],
   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
            loader: 'babel-loader',
            options: {
               presets: ['@babel/preset-env'],
              // plugins: ['@babel/plugin-proposal-object-rest-spread']
            }
            }
         }
      ]      
   }/* Непонятно на кой хер нужен, если mode = production минимизирует и так 
   optimization: {
      minimizer: [
         new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i,
      }),
      ],
   }*/
};