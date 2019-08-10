module.exports = {
    entry: './src/index.js',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
              test:/\.css$/,
              use:['style-loader','css-loader']
        },
        { 
              test: /\.ts?$/, 
              loader: "ts-loader" 
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx', '.ts']
    },
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'index.js'
    },
    devServer: {
      contentBase: './dist'
    }
  };
  