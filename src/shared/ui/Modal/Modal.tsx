import React, { PropsWithChildren } from 'react';
import { classNames, Mods } from '@/shared/libs/classNames/classNames';
import { useTheme } from '@/app/providers/ThemeProvider';
import { useModal } from '@/shared/libs/hooks/useModal/useModal';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string
    isOpen?: boolean
    onClose?: () => void
    lazy?: boolean
}

export const Modal = (props: PropsWithChildren<ModalProps>) => {
    const { theme } = useTheme();
    const {
        className,
        children,
        isOpen,
        onClose,
        lazy,
    } = props;

    const { isClosing, isMounted, close } = useModal(
        {
            isOpen,
            onClose,
            animationDelay: 300,
        },
    );

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className, theme, 'app_modal'])}>
                <Overlay onClick={close} />
                <div
                    className={cls.content}
                >
                    {children}
                </div>

            </div>
        </Portal>
    );
};
