import {classNames} from "shared/classNames/classNames";
import cls from "./Button.module.scss"
import {ButtonHTMLAttributes, FC} from "react";

export enum EButtonTheme {
    CLEAR = 'clear',
    ACTION = 'action',
}

export enum EButtonSize {
    S = 'small',
    M = 'medium',
    L = 'large',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: EButtonTheme
    size?: EButtonSize
}
export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        theme = EButtonTheme.ACTION,
        size = EButtonSize.M,
        children,
        ...otherProps
    } = props

    return (
        <button
            className={classNames(
                cls.Button,
                {
                    [cls[size]]: true,
                },
                [className, cls[theme]]
            )}
            {...otherProps}
        >
            {children}
        </button>
    );
};
