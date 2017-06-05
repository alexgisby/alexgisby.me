const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'app/js', 'client.js'),
    output: {
        path: path.join(__dirname, 'build', 'js'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: path.join(__dirname, 'app'),
                loaders: [
                    'babel-loader?presets[]=react&presets[]=es2015&cacheDirectory=babel_cache'
                ]
            }
        ]
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            mangle: true,
            sourcemap: false,
            beautify: false,
            dead_code: true
        })
    ]
};
