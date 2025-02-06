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
            <h1>{t('title')}</h1>
        </div>
    );
};

