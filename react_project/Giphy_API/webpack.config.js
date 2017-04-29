var webpack = require('webpack');

module.exports = {
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/foundation.min.js',
        './app/app.jsx'
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            Main: 'app/components/Main.jsx',
            Giphy: 'app/api/Giphy.jsx',
            AddCaption: 'app/components/AddCaption.jsx',
            GiphyForm: 'app/components/GiphyForm.jsx',
            RandomGiphy: 'app/api/RandomGiphy.jsx',
            RandomGif: 'app/components/RandomGif.jsx',
            applicationStyles: 'app/styles/app.scss',
            EmbedUrl: "app/components/EmbedUrl"
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    devtool: 'inline-source-map'
};
