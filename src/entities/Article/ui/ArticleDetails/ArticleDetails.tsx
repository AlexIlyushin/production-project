import { classNames } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/libs/components/DynamicModuleLoader';
import { memo, useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/libs/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import { useSelector } from 'react-redux';
import {
    Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Icon } from 'shared/ui/Icon/Icon';
import { ArticleCodeBlockComponent } from '../../ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../../ui/ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../../ui/ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import cls from './ArticleDetails.module.scss';
import {
    getArticleDetailData,
    getArticleDetailError,
    getArticleDetailIsLoading,
} from '../../model/selectors/articleDetails';

interface ArticleDetailsProps {
    className?: string
    id: string
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const isLoading = useSelector(getArticleDetailIsLoading);
    const error = useSelector(getArticleDetailError);
    const article = useSelector(getArticleDetailData);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') dispatch(fetchArticleById(id));
    }, [dispatch, id]);

    const renderBlock = useCallback((block:ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return (
                <ArticleCodeBlockComponent
                    key={block.id}
                    className={cls.block}
                    block={block}
                />
            );
        case ArticleBlockType.TEXT:
            return (
                <ArticleTextBlockComponent
                    key={block.id}
                    className={cls.block}
                    block={block}
                />
            );
        case ArticleBlockType.IMAGE:
            return (
                <ArticleImageBlockComponent
                    key={block.id}
                    className={cls.block}
                    block={block}
                />
            );
        default:
            return null;
        }
    }, []);

    let content;
    if (isLoading) {
        content = (
            <>
                <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
                <Skeleton className={cls.title} width={669} height={31} />
                <Skeleton className={cls.skeleton} width={400} height={31} />
                <Skeleton className={cls.skeleton} width="100%" height={231} />
                <Skeleton className={cls.skeleton} width="100%" height={231} />
            </>
        );
    } else if (error) {
        content = (
            <div>
                <Text
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                    title={t('Произошла ошибка при загрузке статьи')}
                />
            </div>
        );
    } else {
        content = (
            <>
                <div className={cls.avatarWrapper}>
                    <Avatar
                        size={200}
                        src={article?.img}
                        className={cls.avatar}
                    />
                </div>
                <Text
                    className={cls.title}
                    align={TextAlign.LEFT}
                    title={article?.title}
                    text={article?.subtitle}
                    size={TextSize.L}
                />
                <div className={cls.articleInfo}>
                    <Icon Svg={EyeIcon} className={cls.icon} />
                    <Text text={String(article?.views)} />
                </div>
                <div className={cls.articleInfo}>
                    <Icon Svg={CalendarIcon} className={cls.icon} />
                    <Text text={article?.createdAt} />
                </div>
                {article?.blocks.map(renderBlock)}
            </>
        );
    }
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
});