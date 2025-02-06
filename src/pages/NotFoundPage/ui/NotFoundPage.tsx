import {classNames} from "shared/classNames/classNames";
import cls from "./NotFoundPage.module.scss"
import React from "react";
import {useTranslation} from "react-i18next";

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({className}:NotFoundPageProps) => {
    const { t } = useTranslation('notFound');

    return (
        <div className={classNames(cls.NotFoundPage, {}, [className])}>
            {/* todo add background */}
            {/* style={{ backgroundImage : `url("./images/bubbles.svg")`}}> */}
            <h1>{t('title')}</h1>
        </div>
    );
};

