import { classNames } from 'shared/libs/classNames/classNames';
import React, {
    FC, useCallback, useEffect, useRef, useState,
} from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string
    isOpen?: boolean
    onClose?: () => void
}

const ANIMATION_DELAY = 300;

export const Modal: FC<ModalProps> = (props) => {
    const {
        className,
        children,
        isOpen,
        onClose,
    } = props;

    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div
                        className={cls.content}
                        onClick={onContentClick}
                    >
                        {children}
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi culpa cupiditate debitis illo in iure magni maiores molestiae molestias obcaecati officia officiis, perspiciatis, praesentium quaerat rem repudiandae sunt veniam.
                    </div>
                </div>
            </div>
        </Portal>
    );
};