/* eslint-disable */
const path = require('path');

// noinspection TsLint
const webpack = require('webpack');

// noinspection TsLint
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

const plugins = [
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
        title: 'Ssk',
        filename: 'index.html',
        template: '../template/index.html',
        // chunksSortMode: 'dependency'
    })
];

const allTsxRules = {
    // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
    test: /\.tsx?$/,


    // ts-loader is faster than awesome-typescript-loader.
    // However, ts-loader is wonky with react-hot-loader,
    // sometimes it works with react-hot-loader and the whole page is not reloading;
    // sometimes it's not, causing the whole page to reload.
    // Going back to awesome-typescript-loader.

    use: [
        {
            loader: 'string-replace-loader',
            options: {
                search: "/\\*yield\\*/, Promise\\.resolve\\(\\)\\.then\\(function \\(\\) \\{[^r]+return require\\(([^)]+)\\);[^)]+\\)",
                replace: "/*yield*/, import($1)",
                flags: "g"
            }
        },
        'babel-loader',
        'awesome-typescript-loader'
    ],

    // exclude: path.resolve(__dirname, 'node_modules'),
    // include: [
    //     path.resolve(__dirname, 'front-end'),
    //     path.resolve(__dirname, 'store'),
    //     path.resolve(__dirname, 'template')
    // ]
};


const rules = [
    allTsxRules
];


const entries = {
    index: [
        './index.tsx'
    ],
    vendor: [
        'react',
        'react-dom',
        'react-hot-loader/patch'
    ]
};


if (!isProd) {

    const use = allTsxRules.use /* as webpack.Loader[] */;


    // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
    // https://stackoverflow.com/questions/27345520/source-maps-files-in-production-is-it-safe
    rules.push({
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
    });
}



const config = {
    context: path.join(__dirname, 'front-end'),
    entry: entries,
    output: {
        path: path.join(__dirname, 'dist--front-end'),
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        // modules: ['front-end', 'node_modules']
    },
    plugins: plugins,
    module: {
        rules: rules
    },
    devServer: {
        historyApiFallback: {
            index: '/index.html'
        }
    }
};


module.exports = config;
