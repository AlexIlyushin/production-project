import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button/Button';
import { classNames } from '@/shared/libs/classNames/classNames';
import cls from './PageError.module.scss';

interface ErrorPageProps {
    className?: string;
}

export const PageError = ({ className }: ErrorPageProps) => {
    const { t } = useTranslation('page-error');

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>
                {t('Произошла непредвиденная ошибка', { ns: 'page-error' })}
            </p>
            <Button onClick={reloadPage}>
                {t('Обновить страницу', { ns: 'page-error' })}
            </Button>
        </div>
    );
};
