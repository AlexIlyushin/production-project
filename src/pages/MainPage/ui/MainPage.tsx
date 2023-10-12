import React from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/Page';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <Page
            data-testid="MainPage"
        >
            {t('Главная страница1')}
        </Page>
    );
};

export default MainPage;
