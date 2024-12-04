import {classNames} from "shared/classNames/classNames";
import cls from "./Button.module.scss"
import {ButtonHTMLAttributes, FC} from "react";

export enum EThemeButton {
    CLEAR = 'clear',
    ACTION = 'action'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: EThemeButton
}
export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        theme = EThemeButton.ACTION,
        children,
        ...otherProps
    } = props

    return (
        <button
            className={classNames(cls.Button, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
         </button>
    );
};

