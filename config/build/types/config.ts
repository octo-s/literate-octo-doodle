export enum EBuildMode {
    production = 'production',
    development = 'development'
}
export type BuildMode = keyof typeof EBuildMode;
export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
};

export interface BuildEnv {
    mode: BuildMode;
    port: 3000;
}
export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    port: 3000;
}