import { memo } from 'react';

import { classNames } from '@/shared/libs/classNames/classNames';

import cls from './Text.module.scss';

export enum TextSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
}

export enum TextTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
    ERROR = 'error',
}

export enum TextAlign {
    LEFT = 'left',
    RIGHT = 'right',
    CENTER = 'center',
}

interface TextProps {
    className?: string;
    /**
     * текст как заголовок
     */
    title?: string;
    /**
     * значение текста
     */
    text?: string;
    /**
     * тема текста
     */
    theme?: TextTheme;
    /**
     * выравнивание текста
     */
    align?: TextAlign;
    /**
     * размер текста
     */
    size?: TextSize;

    'data-testid'?: string;
}

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    [TextSize.S]: 'h3',
    [TextSize.M]: 'h2',
    [TextSize.L]: 'h1',
};

export const Text = memo((props: TextProps) => {
    const {
        title,
        text,
        className,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,

        'data-testid': dataTestId = 'Text',
    } = props;

    const HeaderTag = mapSizeToHeaderTag[size];

    return (
        <div
            className={classNames(cls.Text, {}, [
                className,
                cls[theme],
                cls[align],
                cls[size],
            ])}
        >
            {title && (
                <HeaderTag
                    data-testid={`${dataTestId}.Header`}
                    className={cls.title}
                >
                    {title}
                </HeaderTag>
            )}
            {text && (
                <p data-testid={`${dataTestId}.Paragraph`} className={cls.text}>
                    {text}
                </p>
            )}
        </div>
    );
});
