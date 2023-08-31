import { Suspense } from 'react';

import { LoginFormAsync } from '../LoginForm/LoginForm.async';

import { classNames } from '@/shared/libs/classNames/classNames';
import { Loader } from '@/shared/ui/Loader';
import { Modal } from '@/shared/ui/Modal';

interface LoginModalProps {
    className?: string
    isOpen:boolean,
    onClose:()=>void
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => (
    <Modal
        lazy
        className={classNames('', {}, [className])}
        isOpen={isOpen}
        onClose={onClose}
    >
        <Suspense fallback={<Loader />}>
            <LoginFormAsync onSuccess={onClose} />
        </Suspense>
    </Modal>
);
