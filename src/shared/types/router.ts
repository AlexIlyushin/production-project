import { RouteObject } from 'react-router-dom';

// eslint-disable-next-line lex-ander-plugin/layers-imports
import { UserRole } from '@/entities/User';

export type AppRoutesProps = RouteObject & {
    authOnly?: boolean;
    roles?: UserRole[];
};
