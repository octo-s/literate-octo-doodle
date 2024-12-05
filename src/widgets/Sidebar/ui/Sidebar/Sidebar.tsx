import {classNames} from "shared/classNames/classNames";
import cls from "./Sidebar.module.scss"
import React, {useState} from "react";
import {Button, EButtonSize} from "shared/ui/Button/Button";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface SidebarProps {
    className?: string;
}
export const Sidebar = ({className}:SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = React.useCallback(() => {
        setCollapsed(prevState => !prevState)
    }, [])

    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <Button size={EButtonSize.S} onClick={onToggle}>toggle</Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
            {/*  todo  lang switcher*/}

            </div>
        </div>
    );
};

