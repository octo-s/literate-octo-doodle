import webpack from 'webpack';
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[]  {
    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
            use: [
        {
            loader: 'file-loader',
        },
    ],
    }

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }

    const cssLoaders =  {
            test: /\.s[ac]ss$/i,
            use: [
                // в деве не будет отдельных css файлов
                isDev ? "style-loader" : MiniCssExtractPlugin.loader,
                // "css-loader",
                {
                    loader: "css-loader",
                    options: {
                        modules: {
                            auto: (resPath: string) => Boolean(resPath.includes('.module')), // resPath -путь до файла
                            localIdentName: isDev
                                ? "[path][name]__[local]"
                                : "[hash:base64:8]", // обычные файлы
                        },

                    }
                },
                "sass-loader",
            ],
        };

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [typescriptLoader, cssLoaders, svgLoader, fileLoader]
}