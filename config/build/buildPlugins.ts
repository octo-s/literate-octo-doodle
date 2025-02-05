import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import {BuildOptions} from "./types/config";
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';
import  MiniCssExtractPlugin from "mini-css-extract-plugin";
import CopyPlugin from "copy-webpack-plugin";
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

export function buildPlugins({paths, isDev}: BuildOptions): webpack.WebpackPluginInstance[] {
    const plugins = [
        new webpack.DefinePlugin({
            BASENAME: JSON.stringify(paths.public),
            IS_DEV: JSON.stringify(isDev),

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

    if (isDev) {
        plugins.push(new webpack.HotModuleReplacementPlugin());
        plugins.push(new BundleAnalyzerPlugin({
            openAnalyzer: false
        }))
    }

    return plugins;
}