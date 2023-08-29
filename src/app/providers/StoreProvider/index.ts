import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore, AppDispatch } from './config/store';
import {
    StateSchema, StateSchemaKey, ReduxStoreWithManager, ThunkConfig,
} from './config/StateSchema';

export {
    StoreProvider,
    createReduxStore,
};

export type {
    StateSchema,
    StateSchemaKey,
    ReduxStoreWithManager,
    AppDispatch,
    ThunkConfig,
};
