import { memo } from 'react';

export type SortOrder = 'asc' | 'desc';

export const typedMemo: <T>(component: T) => T = memo;
