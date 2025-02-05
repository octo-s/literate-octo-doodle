export enum EBuildMode {
    production = 'production',
    development = 'development'
}
export type BuildMode = keyof typeof EBuildMode;
export interface BuildPaths {
    entry: string;
    build: string;
    public: string;
    html: string;
    src: string;
    notFound: string;
}

export interface BuildEnv {
    mode: BuildMode;
    public: string;
    port: 3000;
}
export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    port: 3000;
}