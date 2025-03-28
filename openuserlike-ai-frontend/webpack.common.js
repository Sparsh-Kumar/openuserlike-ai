const path = require('path');
const glob = require('glob');

module.exports = {
  entry: glob.sync('dist/**/*.{js,html,css}'),
  output: {
    filename: 'widget.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'WidgetBundle',
    libraryTarget: 'umd',
    globalObject: 'this',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  externals: {
    angular: 'angular',
  },
  resolve: {
    preferRelative: true,
  },
};
