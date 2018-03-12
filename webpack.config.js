const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    // configuration
    context: __dirname + "/",
    entry: __dirname + "/source/app.js",
    output: {
        path: __dirname + "/build",
        filename: "build.js"
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new UglifyJSPlugin()
        // new webpack.optimize.DedupePlugin()
    ],
    mode: 'development',
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader'
            }
        }]
    }
};