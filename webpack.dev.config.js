const path = require("path");

module.exports = {
    entry: {
      dev: ["./demo/app.js"]
    },
    output: {
      filename: "app.bundle.js",
      path: path.resolve(__dirname, "demo"),
      publicPath: "/assets/",
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        'react': path.resolve('node_modules/react'),
        'styled-components': path.resolve('node_modules/styled-components'),
      },
    },
    module: {
      rules: [
        {
          test: /(\.js?$|\.jsx?$)/,
          use: 'babel-loader',
          exclude: /node_modules/
        },
      ]
    },
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      static: [
        {
          directory: path.join(__dirname, 'demo'),
          publicPath: "/",
        },
        {
          directory: path.join(__dirname, 'demo'),
          publicPath: "/assets/",
        },
      ],
      historyApiFallback: true
    }
}
