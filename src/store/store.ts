import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
import { cartReducer, userReducer, wishlistReducer } from './slices'
import { authApi, frontProductApi, frontWidgetApi } from './api'

export const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer,
        wishlist: wishlistReducer,
        [authApi.reducerPath]: authApi.reducer,
        [frontProductApi.reducerPath]: frontProductApi.reducer,
        [frontWidgetApi.reducerPath]: frontWidgetApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        authApi.middleware,
        frontProductApi.middleware,
        frontWidgetApi.middleware
    )
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
