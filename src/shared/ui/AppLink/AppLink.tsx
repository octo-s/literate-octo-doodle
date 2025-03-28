import {classNames} from "shared/classNames/classNames";
import cls from "./AppLink.module.scss"
import {Link, LinkProps} from "react-router-dom";
import {FC} from "react";

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red'
}

interface AppLinkProps extends LinkProps{
    className?: string;
    theme?: AppLinkTheme;
}
export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        className,
        theme,
        children,
        to,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};

