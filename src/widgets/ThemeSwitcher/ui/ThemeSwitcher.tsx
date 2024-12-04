import {classNames} from "shared/classNames/classNames";
import cls from "./ThemeSwitcher.module.scss"
import React from "react";
import {ETheme, useTheme} from "app/providers/ThemeProvider";
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import {Button, EThemeButton} from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string;
}
export const ThemeSwitcher = ({className}:ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme();

    return (
        <Button
            theme={EThemeButton.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}>
            {theme === ETheme.NORMAL ? <LightIcon/> : <DarkIcon/>}
        </Button>
    );
};

