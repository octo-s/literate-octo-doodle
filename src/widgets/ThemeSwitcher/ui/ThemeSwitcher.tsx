import {classNames} from "shared/classNames/classNames";
import cls from "./ThemeSwitcher.module.scss"
import React from "react";
import {ETheme, useTheme} from "app/providers/ThemeProvider";
import ThemeSwitchIcon from 'shared/assets/icons/themeSwitch.svg'
import {Button, EButtonTheme} from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string;
}
export const ThemeSwitcher = ({className}:ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme();

    return (
        <Button
            theme={EButtonTheme.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}>
            {theme === ETheme.NORMAL ? <ThemeSwitchIcon /> : <ThemeSwitchIcon/>}
        </Button>
    );
};

