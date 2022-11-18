import { classNames } from 'shared/libs/classNames/classNames';
import { memo, useCallback } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import {
    Article, ArticleBlockType, ArticleTextBlock, ArticleView,
} from '../../model/types/article';
import cls from './ArticleListItem.module.scss';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleListItemSkeletonProps {
    className?: string
    view: ArticleView
}

export const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
    const { className, view } = props;

    if (view === ArticleView.BIG) {
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Skeleton height={30} width={30} border="50%" />
                        <Skeleton width={150} height={16} className={cls.username} />
                        <Skeleton width={150} height={16} className={cls.date} />
                    </div>
                    <Skeleton width={520} height={24} className={cls.title} />
                    <Skeleton height={250} className={cls.img} />

                    <div className={cls.footer}>
                        <Skeleton height={36} width={200} />
                        <Skeleton height={16} width={100} className={cls.views} />
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <Skeleton height={200} width={200} />
                </div>
                <div className={cls.infoWrapper}>
                    <Skeleton width={130} height={16} />
                </div>
                <Skeleton width={200} height={16} className={cls.title} />
            </Card>
        </div>
    );
});
