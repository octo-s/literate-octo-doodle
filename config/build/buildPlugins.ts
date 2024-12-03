import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import {BuildOptions} from "./types/config";
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {

    return [
        new webpack.DefinePlugin({
            'process.env.public' : JSON.stringify(paths.public)
        }),
        new webpack.ProvidePlugin({
            "process": 'process/browser',
        }),
        new HTMLWebpackPlugin({
            template: paths.html,
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: paths.notFound,
                    to: paths.build,
                },
            ],
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css', //когда будем разбивать файлы на асинхронные
        }),
    ]
}