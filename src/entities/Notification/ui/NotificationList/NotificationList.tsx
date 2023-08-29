import { memo } from 'react';
import { classNames } from '@/shared/libs/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Skeleton } from '@/shared/ui/Skeleton';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import { useNotifications } from '../../api/notificationApi';
import cls from './NotificationList.module.scss';

interface NotificationListProps {
    className?: string
}

export const NotificationList = memo(({ className }: NotificationListProps) => {
    const { data, isLoading } = useNotifications(null, { pollingInterval: 10000 });

    if (isLoading) {
        return (
            <VStack max gap="16" className={classNames(cls.NotificationList, {}, [className])}>
                <Skeleton width="100%" height="80px" border="8px" />
                <Skeleton width="100%" height="80px" border="8px" />
                <Skeleton width="100%" height="80px" border="8px" />
            </VStack>
        );
    }
    return (
        <VStack max gap="16" className={classNames(cls.NotificationList, {}, [className])}>
            {data?.map((item) => <NotificationItem key={item.id} item={item} />)}
        </VStack>
    );
});
