import webpack from 'webpack';
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnv, BuildPaths, EBuildMode} from "./config/build/types/config";
import path from "path";

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html')
    }
    const mode = env.mode || EBuildMode.development;
    const isDev = mode === EBuildMode.development;
    const PORT = env.port || 3000;

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
    });

    return config
};