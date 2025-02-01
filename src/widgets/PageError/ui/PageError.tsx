import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';
import {classNames} from "shared/classNames/classNames";

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation('error');

    const reloadPage = () => {
         
        location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>{t('title')}</p>
            <Button onClick={reloadPage}>
                {t('reload')}
            </Button>
        </div>
    );
};
