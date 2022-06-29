const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let mode = 'development'
if (process.env.NODE_ENV === 'production') {
    mode = 'production'
}
module.exports = {
    entry: "./src/index.tsx",
    mode: mode,
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js",
    },
    resolve: {
        extensions: ['.js', '.ts', '.jsx', '.tsx']
    },
    target: "web",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: "ts-loader",
            },
            {
                test: /\.js$/,
                loader: "source-map-loader",
            },
            {
                test: /\.(s(a|c)ss)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({template: path.resolve(__dirname, "src", "index.html")}),
        new MiniCssExtractPlugin()
    ],

    devServer: {
        hot: true
    },
};
