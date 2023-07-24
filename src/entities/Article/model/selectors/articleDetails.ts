import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticleDetailsData = (state:StateSchema) => state.articleDetails?.data;
export const getArticleDetailError = (state:StateSchema) => state.articleDetails?.error;
export const getArticleDetailIsLoading = (state:StateSchema) => state.articleDetails?.isLoading;
