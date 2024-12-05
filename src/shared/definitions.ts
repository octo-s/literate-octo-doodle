export enum AppRoutes {
    MAIN = 'main',
    ABOUT = `about`
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: `/about`
}

export enum ELanguage {
    ru = 'ru',
    en = 'en',
}