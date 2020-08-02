const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.tsx", 
    mode: "development",  
    module : {
        rules:[ 
            {
                test: /\.(ts|tsx)$/,
                loader: "awesome-typescript-loader",
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
            },
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(svg|png|jpe?g|gif)$/,
                use: {
                  loader: "url-loader",
                  options: {
                    limit: 10000,
                    name: 'images/[name].[ext]'
                  },
                },
            },
        ]
    },
    resolve: {extensions: ["*", ".js", ".jsx", ".ts", ".tsx", ".json"]},
    output:{
        filename: "bundle.js",
        chunkFilename: '[id].js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        historyApiFallback: true, 
        port:3000,
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'src', 'index.html'),
            filename: 'index.html',
            inject: 'body'
        })
    ]
};