import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    /**
     * содержимое портала
     */
    children: ReactNode;
    /**
     * куда портал будет отрисован
     */
    element?: HTMLElement;
}

export const Portal = (props: PortalProps) => {
    const { children, element = document.body } = props;

    return createPortal(children, element);
};
