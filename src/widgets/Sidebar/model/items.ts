import React from 'react';
import { AppRoutes, RouthPath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';

export interface SidebarItemType {
    path: string,
    text: string
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
    authOnly?:boolean
}

export const SidebarItemsList:SidebarItemType[] = [
    {
        path: RouthPath[AppRoutes.MAIN],
        text: 'Главная',
        Icon: MainIcon,
    },
    {
        path: RouthPath[AppRoutes.ABOUT],
        text: 'О сайте',
        Icon: AboutIcon,
    },
    {
        path: RouthPath[AppRoutes.PROFILE],
        text: 'Профиль',
        Icon: ProfileIcon,
        authOnly: true,
    },
];
