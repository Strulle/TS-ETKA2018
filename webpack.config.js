const webpack = require('./node_modules/webpack');
const path = require('./node_modules/path');

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: './dist/app.js',
        library: 'productslib'
    },
    module: {
        loaders: [{
                test: /\.ts$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },

        ]
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.js'],
        modules: [
            path.resolve('./node_modules')
        ]
    },

}