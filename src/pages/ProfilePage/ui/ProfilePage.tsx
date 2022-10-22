import { classNames } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/libs/components/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile';

const initialReducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?:string
}

export const ProfilePage = ({ className }:ProfilePageProps) => {
    const { t } = useTranslation();
    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                {t('Страница профиля')}
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
