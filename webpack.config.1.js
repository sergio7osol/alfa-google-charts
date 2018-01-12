const webpack = require('webpack');
const path = require('path');

const DashboardPlugin = require('webpack-dashboard/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // create the index.html file to serve our webpack bundles
const ExtractTextPlugin = require("extract-text-webpack-plugin");


const nodeEnv = process.env.NODE_ENV || 'development';
const isProduction = nodeEnv === 'production'; 

console.log("NODE_ENV:", process.env.NODE_ENV);
console.log("isProduction:", isProduction);

let DIST_DIR = path.resolve(__dirname, "dist");
let SRC_DIR = path.resolve(__dirname, "src");

const extractScss = new ExtractTextPlugin({
    filename: "css/[name].[contenthash].css"
 });

// Common plugins
const plugins = [];
// Common rules
const rules = [
    {
        test: /\.js$/,
        exclude: /node_modules/,
        include: SRC_DIR,
        loader: "babel-loader",
        query: {
            presets: ["env"]
        }
    }, {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
            limit: 5000
        }
    }
];

if (isProduction) {
    console.log("is production");
    // Production plugins
    plugins.push(
        new HtmlWebpackPlugin({
            template: './src/index.html', // to get the template from - src/...
            filename: 'index.html', // the file to put the generated HTML into - dist/...
            inject: 'body',
            hash:  true,
            minify: !isProduction ? false : {
                html5: true,
                // minifyCSS: true,
                removeComments: true,
                //removeAttributeQuotes: true,
                //collapseWhitespace: true,
                //removeEmptyAttributes: true,
            }
        }),
        new webpack.optimize.UglifyJsPlugin(),
        extractScss
    );
    // Production rules
    rules.push(
        {
            test: /\.scss$/,
            use: extractScss.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }],
                fallback: "style-loader"
            })
        }
    );
} else {
    console.log("is development");
    // Development plugins
    plugins.push(
        new DashboardPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html', // to get the template from - src/...
            filename: 'index.html', // the file to put the generated HTML into - dist/...
            inject: 'body',
            hash:  true
        }),
        extractScss
    );
    // Development rules
    rules.push(
        {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }],
                fallback: "style-loader"
            })
        }
    );
}

const config = {
    entry: SRC_DIR + "/js/index.js",
    output: {
        path: DIST_DIR, // directory to initially output files into
        filename: "js/bundle.js",
        publicPath: ""
    },
    module: {
        rules
    },
    plugins,
    devServer: {
        contentBase: DIST_DIR, // where to serve content from. Default - your current working directory. 
                                  // recommended to use an absolute path.
        // inline: true, // default -> inline: true
        hot: true,
        publicPath: "", // Make sure publicPath always starts and ends with a forward slash.
        port: 7008
    }
}

module.exports = config;