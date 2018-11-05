var path = require('path');
const webpack = require('webpack');
const publicPath = '/dist/build/';
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    //Content 
    entry: './src/index.js',
    // A SourceMap without column-mappings ignoring loaded Source Maps. 
    devtool: 'cheap-module-source-map',
    plugins: [
        //simplifies creation of HTML files to serve your webpack bundles. This is especially useful for webpack bundles that include a hash in the filename which changes every compilation. You can either let the plugin generate an HTML file for you, supply your own template using lodash templates or use your own loader.
        new HtmlWebpackPlugin({
            title: 'Hot Module Replacement'
        }),
        //Auto replacement of page when i save some file, even css
        new webpack.HotModuleReplacementPlugin()
    ],

    output: {
        path: path.join(__dirname, publicPath),
        filename: '[name].bundle.js',
        publicPath: publicPath,
        sourceMapFilename: '[name].map',
    },

    devServer: {
        port: 3000,
        host: 'localhost',
        //Be possible go back pressing the "back" button at chrome
        historyApiFallback: true,
        noInfo: false,
        stats: 'minimal',
        publicPath: publicPath,
        contentBase: path.join(__dirname, publicPath),
        //hotmodulereplacementeplugin
        hot: true
    },
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: 'http://localhost:4000'
        })
    },
    module: {
        rules: [
            {
                test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/',    // where the fonts will go
                        publicPath: '../'       // override the default path
                    }
                }]
            },
            {
                test: /\.css$/, use: ['style-loader', 'css-loader'],
                include: /flexboxgrid/
                //Follow instructions at https://github.com/roylee0704/react-flexbox-grid
            },
            // {
            //     test: /\.(png|svg|jpg|gif)$/,
            //     use: ['file-loader']
            // },
            // {
            //     test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            //     loader: "url-loader?limit=10000&mimetype=application/font-woff"
            // },
            // {
            //     test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            //     loader: "file-loader"
            // },
            {
                test: /\.js|.jsx?$/,
                exclude: /(node_modules)/,
                loaders: ["babel-loader"]
            }]
    },
}









// var path = require('path');
// const webpack = require('webpack');
// const publicPath = '/dist/build/';
// const HtmlWebpackPlugin = require('html-webpack-plugin');


// module.exports = {
//   //Content 
//   entry: './src/index.js',
//   // A SourceMap without column-mappings ignoring loaded Source Maps. 
//   devtool: 'cheap-module-source-map',
//   plugins: [
//     //simplifies creation of HTML files to serve your webpack bundles. This is especially useful for webpack bundles that include a hash in the filename which changes every compilation. You can either let the plugin generate an HTML file for you, supply your own template using lodash templates or use your own loader.
//     new HtmlWebpackPlugin({
//       title: 'Hot Module Replacement'
//     }),
//     //Auto replacement of page when i save some file, even css
//     new webpack.HotModuleReplacementPlugin()
//   ],

//   output: {
//     path: path.join(__dirname, publicPath),
//     filename: '[name].bundle.js',
//     publicPath: publicPath,
//     sourceMapFilename: '[name].map',
//   },

//   devServer: {
//     port: 3000,
//     host: 'localhost',
//     //Be possible go back pressing the "back" button at chrome
//     historyApiFallback: true,
//     noInfo: false,
//     stats: 'minimal',
//     publicPath: publicPath,
//     contentBase: path.join(__dirname, publicPath),
//     //hotmodulereplacementeplugin
//     hot: true
//   },
//   externals: {
//         // global app config object
//         config: JSON.stringify({
//             apiUrl: 'http://localhost:4000'
//         })
//     },
//   module: {
//     // rules: [
//     //  { 
//     //    test: /\.css$/, use: ['style-loader', 'css-loader'], 
//     //    include: /flexboxgrid/
//     //    //Follow instructions at https://github.com/roylee0704/react-flexbox-grid
//     //  },
//     //   {
//     //     test: /\.(png|svg|jpg|gif)$/,
//     //     use: ['file-loader']
//     //   },
//     //   {
//     //     test: /\.js|.jsx?$/,
//     //     exclude: /(node_modules)/,
//     //     loaders: ["babel-loader"]
//     //   }],
//       loaders: [
//             { test: /(\.js$)|(\.jsx$)/, exclude: /node_modules/, loader: 'babel-loader' },
//             { test: /(\.jade$)/, exclude: /node_modules/, loader: 'jade-loader' },
//             { test: /(\.css$)/, exclude: /node_modules/, loaders: ['style-loader', 'css-loader', 'postcss-loader'] },
//             { test: /(\.styl$)/, exclude: /node_modules/, loaders: ['style-loader', 'css-loader', 'stylus-loader'] },
//             { test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/, exclude: /node_modules/, loader: 'url-loader?importLoaders=1&limit=100000' },
//             { test: /\.jsx$/, exclude: /node_modules/, loader: 'react-hot-loader' }
//         ],
// },
// }


















// var path = require('path');
// const webpack = require('webpack');
// const publicPath = '/dist/build/';
// const HtmlWebpackPlugin = require('html-webpack-plugin');


// module.exports = {
//   //Content 
//   entry: './src/index.js',
//   // A SourceMap without column-mappings ignoring loaded Source Maps. 
//   devtool: 'cheap-module-source-map',
//   plugins: [
//     //simplifies creation of HTML files to serve your webpack bundles. This is especially useful for webpack bundles that include a hash in the filename which changes every compilation. You can either let the plugin generate an HTML file for you, supply your own template using lodash templates or use your own loader.
//     new HtmlWebpackPlugin({
//       title: 'Hot Module Replacement'
//     }),
//     //Auto replacement of page when i save some file, even css
//     new webpack.HotModuleReplacementPlugin()
//   ],

//   output: {
//     path: path.join(__dirname, publicPath),
//     filename: '[name].bundle.js',
//     publicPath: publicPath,
//     sourceMapFilename: '[name].map',
//   },

//   devServer: {
//     port: 3000,
//     host: 'localhost',
//     //Be possible go back pressing the "back" button at chrome
//     historyApiFallback: true,
//     noInfo: false,
//     stats: 'minimal',
//     publicPath: publicPath,
//     contentBase: path.join(__dirname, publicPath),
//     //hotmodulereplacementeplugin
//     hot: true
//   },
//   externals: {
//         // global app config object
//         config: JSON.stringify({
//             apiUrl: 'http://localhost:4000'
//         })
//     },
//   module: {
//     // rules: [
//     //  { 
//     //    test: /\.css$/, use: ['style-loader', 'css-loader'], 
//     //    include: /flexboxgrid/
//     //    //Follow instructions at https://github.com/roylee0704/react-flexbox-grid
//     //  },
//     //   {
//     //     test: /\.(png|svg|jpg|gif)$/,
//     //     use: ['file-loader']
//     //   },
//     //   {
//     //     test: /\.js|.jsx?$/,
//     //     exclude: /(node_modules)/,
//     //     loaders: ["babel-loader"]
//     //   }],
//       loaders: [
//             { test: /(\.js$)|(\.jsx$)/, exclude: /node_modules/, loader: 'babel-loader' },
//             { test: /(\.jade$)/, exclude: /node_modules/, loader: 'jade-loader' },
//             { test: /(\.css$)/, exclude: /node_modules/, loaders: ['style-loader', 'css-loader', 'postcss-loader'] },
//             { test: /(\.styl$)/, exclude: /node_modules/, loaders: ['style-loader', 'css-loader', 'stylus-loader'] },
//             { test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/, exclude: /node_modules/, loader: 'url-loader?importLoaders=1&limit=100000' },
//             { test: /\.jsx$/, exclude: /node_modules/, loader: 'react-hot-loader' }
//         ],
// },
// }

