import React from 'react';
import {RoutePath} from "shared/definitions";
import {classNames} from "shared/classNames/classNames";
import cls from "./Navbar.module.scss"
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {useTranslation} from "react-i18next";
interface NavbarProps {
    className?: string;
}
export const Navbar = ({className}:NavbarProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} className={classNames(cls.link)} to={RoutePath.main}>
                    {t('main')}
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} className={classNames(cls.link)} to={RoutePath.about}>
                    {t('about')}
                </AppLink>
            </div>
        </div>
    );
};
