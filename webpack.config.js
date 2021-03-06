const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

var config = {
    output: {
        path: path.resolve(__dirname + '/dist/'),
    },
    optimization: {
        minimizer: [new UglifyJsPlugin({ sourceMap : true })],
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                include: __dirname,
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.css$/,
                loaders: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    externals: {
        moment: 'moment'
    },
    plugins: [
        /*new webpack.optimize.UglifyJsPlugin( {
            minimize : true,
            sourceMap : true,
            mangle: true,
            compress: true,
        } ),*/
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ]
};


module.exports = [
    merge(config, {
        entry: path.resolve(__dirname + '/src/plugin.js'),
        output: {
            filename: 'simple-vue-slick.min.js',
            libraryTarget: 'window',
            library: 'SimpleSlickCarousel',
        }
    }),
    merge(config, {
        entry: path.resolve(__dirname + '/src/Carousel.vue'),
        output: {
            filename: 'simple-vue-slick.js',
            libraryTarget: 'umd',
            library: 'simple-vue-slick',
            umdNamedDefine: true
        }
    })
];
