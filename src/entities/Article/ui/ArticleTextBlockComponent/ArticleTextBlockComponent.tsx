import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleTextBlock } from '../../model/types/article';

import { classNames } from '@/shared/libs/classNames/classNames';
import { Text } from '@/shared/ui/Text';

import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(
    ({ className, block }: ArticleTextBlockComponentProps) => {
        const { t } = useTranslation();
        return (
            <div
                className={classNames(cls.ArticleTextBlockComponent, {}, [
                    className,
                ])}
            >
                {block.title && (
                    <Text title={block.title} className={cls.title} />
                )}
                {block.paragraphs.map((paragraph) => (
                    <Text
                        key={paragraph}
                        text={paragraph}
                        className={cls.paragraph}
                    />
                ))}
            </div>
        );
    },
);
