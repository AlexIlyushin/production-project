import React, { PropsWithChildren } from 'react';

import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';

import { classNames, Mods } from '@/shared/libs/classNames/classNames';
import { useModal } from '@/shared/libs/hooks/useModal/useModal';
import { useTheme } from '@/shared/libs/hooks/useTheme/useTheme';

import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    /**
     * флаг открытия
     */
    isOpen?: boolean;
    /**
     * колбек при закрытии
     */
    onClose?: () => void;
    /**
     * флаг ленивой отрисовки
     */
    lazy?: boolean;
}

export const Modal = (props: PropsWithChildren<ModalProps>) => {
    const { theme } = useTheme();
    const { className, children, isOpen, onClose, lazy } = props;

    const { isClosing, isMounted, close } = useModal({
        isOpen,
        onClose,
        animationDelay: 300,
    });

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div
                className={classNames(cls.Modal, mods, [
                    className,
                    theme,
                    'app_modal',
                ])}
            >
                <Overlay onClick={close} />
                <div className={cls.content}>{children}</div>
            </div>
        </Portal>
    );
};
