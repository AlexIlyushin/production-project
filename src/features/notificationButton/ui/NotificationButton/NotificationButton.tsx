import { classNames } from 'shared/libs/classNames/classNames';
import React, { memo } from 'react';
import { Popover } from 'shared/ui/Popups';
import { Icon } from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';
import { NotificationList } from 'entities/Notification';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string
}

export const NotificationButton = memo(({ className }: NotificationButtonProps) => (
    <Popover
        className={classNames(cls.NotificationButton, {}, [className])}
        direction="bottom right"
        trigger={(
            <Icon Svg={NotificationIcon} inverted />
        )}
    >
        <NotificationList className={cls.notifications} />
    </Popover>

));
