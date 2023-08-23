import { RouteObject } from 'react-router-dom';
import { UserRole } from '@/entities/User';

export type AppRoutesProps = RouteObject & {
  authOnly?: boolean
  roles?: UserRole[]
}
