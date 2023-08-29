import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/libs/classNames/classNames';
import { Text, TextAlign } from '@/shared/ui/Text';
import cls from './ArticleImageBlockComponent.module.scss';
import { ArticleImageBlock } from '../../model/types/article';

interface ArticleImageBlockComponentProps {
    className?: string
    block: ArticleImageBlock
}

export const ArticleImageBlockComponent = memo(({ className, block }: ArticleImageBlockComponentProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
            <img src={block.src} alt={block.title} className={cls.img} />
            {block.title && (
                <Text
                    align={TextAlign.CENTER}
                    text={block.title}
                />
            )}
        </div>
    );
});
