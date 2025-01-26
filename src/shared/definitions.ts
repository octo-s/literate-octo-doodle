export enum AppRoutes {
    MAIN = 'main',
    ABOUT = `about`,
    NOT_FOUND = `notFound`
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: `/about`,
    [AppRoutes.NOT_FOUND]: `*`
}

export enum ELanguage {
    ru = 'ru',
    en = 'en',
}