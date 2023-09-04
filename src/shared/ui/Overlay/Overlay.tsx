import { memo } from 'react';

import { classNames } from '@/shared/libs/classNames/classNames';

import cls from './Overlay.module.scss';

interface OverlayProps {
    className?: string;
    /**
     * колбек при клике на оверлей
     */
    onClick?: () => void;
}

export const Overlay = memo((props: OverlayProps) => {
    const { className, onClick } = props;

    return (
        <div onClick={onClick} className={classNames(cls.Overlay, {}, [className])} />
    );
});
