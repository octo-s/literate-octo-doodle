import {classNames} from "shared/classNames/classNames";
import cls from "./Sidebar.module.scss"
import React, {useState} from "react";
import {Button, EButtonSize} from "shared/ui/Button/Button";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LanguageSwitcher} from "widgets/LanguageSwitcher";
import {useTranslation} from "react-i18next";

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
            <Button size={EButtonSize.S} onClick={onToggle}>
                {t(collapsed? 'open': 'hide')}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher />
            </div>
        </div>
    );
};

