const webpack = require('webpack');
const path = require('path');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin'); // create the index.html file to serve our webpack bundles
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const isProduction = process.env.production === true;

console.log("NODE_ENV:", process.env.NODE_ENV);
console.log("isProduction:", isProduction);

let DIST_DIR = path.resolve(__dirname, "server");
let SRC_DIR = path.resolve(__dirname, "src");

const extractScss = new ExtractTextPlugin({
    filename: "css/[name].css"
 });

console.log("src: ", SRC_DIR + "/js/index.js");

const config = {
    entry: SRC_DIR + "/js/index.js",
    output: {
        path: DIST_DIR, // directory to initially output files into
        filename: "js/bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/, 
                // exclude: /node_modules/,  // for UglifyJSPlugin to work properly (used already transpiled to ES5 code)
                loader: "babel-loader" 
            }, {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    fallback: "style-loader"
                })
            }, {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 5000
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // to get the template from - src/...
            filename: 'index.html', // the file to put the generated HTML into - dist/...
            inject: 'body',
            hash:  true
        }),
        extractScss,
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new UglifyJSPlugin()
        /*,
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: isProduction ? true : false
        })*/
    ],
    devServer: {
        contentBase: DIST_DIR, // where to serve content from. Default - your current working directory. 
                                  // recommended to use an absolute path.
        // inline: true, // default -> inline: true
        // hot: true, // REMOVE THIS SHIT! without removing it - won't work.
        publicPath: "", // Make sure publicPath always starts and ends with a forward slash.
        port: 7008
    }
}

module.exports = config;