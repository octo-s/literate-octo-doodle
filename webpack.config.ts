import webpack from 'webpack';
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnv, BuildPaths, EBuildMode} from "./config/build/types/config";
import path from "path";

export default (env: BuildEnv) => {
    const mode = env.mode || EBuildMode.development;
    const PUBLIC_URL = env.public || '/';
    const isDev = mode === EBuildMode.development;
    const PORT = env.port || 3000;

    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        notFound: path.resolve(__dirname, 'public', '404.html'),
        src: path.resolve(__dirname, 'src'),
        public: PUBLIC_URL,
    }

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
    });

    return config
};