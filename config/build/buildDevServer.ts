import {BuildOptions} from "./types/config";
import { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildDevServer(options: BuildOptions):  DevServerConfiguration {

    return {
        port: options.port,
        open: true,
        historyApiFallback: options.isDev ? true : {
            rewrites: [{ from: /\//, to: '/404.html' }],
        },
        hot: true
    }
}