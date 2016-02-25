// compile all our js and jsx and launch development server.
module.exports = {
  //This is our configuration object
  entry: './main.js',
  output: {
    path: './',
    //our bundled file
    filename: 'index.js'
  },
  //arguments for dev server
  devServer: {
    inline: true, //allows it to reload on the fly
    port: 3000
  },
  // loaders
  module: {
    loaders: [
      {
        //test for .js at the end of a file
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}