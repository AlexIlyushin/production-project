import { classNames } from 'shared/libs/classNames/classNames';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { ArticleType } from '../../model/consts/articleConsts';

interface ArticleTypeTabsProps {
    className?: string
    value:ArticleType
    onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const { t } = useTranslation();
    const { className, value, onChangeType } = props;

    const typeTabs = useMemo<TabItem<ArticleType>[]>(() => [
        {
            value: ArticleType.ALL,
            content: t('Все статьи'),
        },
        {
            value: ArticleType.IT,
            content: t('Айти'),
        },
        {
            value: ArticleType.ECONOMICS,
            content: t('Экономика'),
        },

        {
            value: ArticleType.SCIENCE,
            content: t('Наука'),
        },
    ], [t]);

    return (
        <Tabs
            tabs={typeTabs}
            value={value}
            onTabClick={onChangeType}
            className={classNames('', {}, [className])}
        />
    );
});
