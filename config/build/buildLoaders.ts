import webpack from 'webpack';
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[]  {
    const cssLoaders =  {
            test: /\.s[ac]ss$/i,
            use: [
                // в деве не будет отдельных css файлов
                isDev ? "style-loader" : MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader",
            ],
        };

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [typescriptLoader, cssLoaders]
}