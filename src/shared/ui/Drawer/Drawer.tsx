import React, {
    memo, ReactNode, useCallback, useEffect,
} from 'react';
import { classNames } from '@/shared/libs/classNames/classNames';
import { useTheme } from '@/app/providers/ThemeProvider';
import { AnimationProvider, useAnimationsLibs } from '@/shared/libs/components/AnimationProvider';
import { Overlay } from '../Overlay/Overlay';
import cls from './Drawer.module.scss';
import { Portal } from '../Portal/Portal';

interface DrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const height = window.innerHeight - 100;

export const DrawerContent = memo((props: DrawerProps) => {
    const { Gesture, Spring } = useAnimationsLibs();

    const [{ y }, api] = Spring.useSpring(() => ({ y: height }));

    const {
        className,
        children,
        onClose,
        isOpen,
        lazy,
    } = props;
    const { theme } = useTheme();

    const openDrawer = useCallback(({ canceled }: { canceled: boolean }) => {
        api.start({ y: 0, immediate: false, config: canceled ? Spring.config.wobbly : Spring.config.stiff });
    }, [Spring.config.stiff, Spring.config.wobbly, api]);

    useEffect(() => {
        if (isOpen) {
            openDrawer({ canceled: false });
        }
    }, [api, isOpen, openDrawer]);

    const close = (velocity = 0) => {
        api.start({
            y: height,
            immediate: false,
            config: { ...Spring.config.stiff, velocity },
            onResolve: onClose,
        });
    };

    const bind = Gesture.useDrag(
        ({
            last,
            velocity: [, vy],
            direction: [, dy],
            offset: [, oy],
            cancel, canceled,
        }) => {
            if (oy < -70) cancel();
            if (last) {
                // eslint-disable-next-line no-unused-expressions
                oy > height * 0.5 || (vy > 0.5 && dy > 0) ? close(vy) : openDrawer({ canceled });
            } else {
                api.start({ y: oy, immediate: true });
            }
        },
        {
            from: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true,
        },
    );

    if (!isOpen) {
        return null;
    }

    const display = y.to((py) => (py < height ? 'block' : 'none'));

    return (
        <Portal>
            <div className={classNames(cls.Drawer, {}, [className, theme, 'app_drawer'])}>
                <Overlay onClick={close} />
                <Spring.a.div
                    className={cls.sheet}
                    style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
                    {...bind()}
                >
                    {children}
                </Spring.a.div>
            </div>
        </Portal>
    );
});

const DrawerAsync = (props: DrawerProps) => {
    const { isLoaded } = useAnimationsLibs();

    if (!isLoaded) {
        return null;
    }
    return <DrawerContent {...props} />;
};

export const Drawer = (props: DrawerProps) => (
    <AnimationProvider>
        <DrawerAsync {...props} />
    </AnimationProvider>
);
