import {classNames} from "shared/classNames/classNames";
import cls from "./Sidebar.module.scss"
import React, {useState} from "react";
import {Button, EButtonSize, EButtonTheme} from "shared/ui/Button/Button";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LanguageSwitcher} from "widgets/LanguageSwitcher";
import {useTranslation} from "react-i18next";
import HideIcon from 'shared/assets/icons/hide.svg'
import OpenIcon from 'shared/assets/icons/show.svg'

interface SidebarProps {
    className?: string;
}
export const Sidebar = ({className}:SidebarProps) => {
    const { t } = useTranslation();
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = React.useCallback(() => {
        setCollapsed(prevState => !prevState)
    }, [])

    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <Button
                theme={EButtonTheme.CLEAR}
                size={EButtonSize.S}
                onClick={onToggle}>
                {collapsed? <OpenIcon /> : <HideIcon />}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher />
            </div>
        </div>
    );
};

