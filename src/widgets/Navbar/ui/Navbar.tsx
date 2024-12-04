import React from 'react';
import {Link} from "react-router-dom";
import {RoutePath} from "shared/definitions";
import {classNames} from "shared/classNames/classNames";
import cls from "./Navbar.module.scss"
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
interface NavbarProps {
    className?: string;
}
export const Navbar = ({className}:NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} className={classNames(cls.link)} to={RoutePath.main}>
                    Main
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} className={classNames(cls.link)} to={RoutePath.about}>
                    About
                </AppLink>
            </div>
            <ThemeSwitcher />
        </div>
    );
};

