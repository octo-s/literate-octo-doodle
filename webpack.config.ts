import webpack from 'webpack';
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildPaths, EBuildMode} from "./config/build/types/config";
import path from "path";

const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html')
}
const mode = EBuildMode.development; //todo
const isDev = mode === EBuildMode.development;

const config: webpack.Configuration = buildWebpackConfig({
    mode: EBuildMode.development,
    paths,
    isDev
});

export default config;