import {classNames} from "shared/classNames/classNames";
import cls from "./LanguageSwitcher.module.scss"
import {useTranslation} from "react-i18next";
import React from "react";
import {Button} from "shared/ui/Button/Button";

interface LanguageSwitcherProps {
    className?: string;
}

export const LanguageSwitcher = ({className}:LanguageSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = React.useCallback(() => {
        i18n.changeLanguage(i18n.language === 'ru'? 'en ': 'ru')
    }, [i18n])


    return (
        <div >
            <Button
                className={classNames(cls.LanguageSwitcher, {}, [className])}
                onClick={toggleLanguage}>
                {t('language')}
            </Button>
        </div>
    );
};

