import { classNames } from 'shared/libs/classNames/classNames';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page/Page';
import { useTranslation } from 'react-i18next';
import cls from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
    className?: string
}

const ArticleEditPage = memo(({ className }: ArticleEditPageProps) => {
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
    const isEdit = Boolean(id);

    return (
        <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
            {isEdit ? t('Редактирование статьи c ID = ') + id
                : t('Создание статьи')}
        </Page>
    );
});

export default ArticleEditPage;
