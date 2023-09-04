import {
    MutableRefObject, useCallback, useEffect, useRef, useState,
} from 'react';

interface UseModalProps {
    isOpen?: boolean,
    onClose?: () => void
    animationDelay:number
}

/**
 * Хук для модальных компнентов drawer/modal
 * @param isOpen
 * @param onClose
 * @param animationDelay
 */
export function useModal({ isOpen, onClose, animationDelay }: UseModalProps) {
    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

    const close = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, animationDelay);
        }
    }, [animationDelay, onClose]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            close();
        }
    }, [close]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    return {
        close,
        isClosing,
        isMounted,
    };
}
