import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slicers/auth/authSlice'
import alertSlice from './slicers/alertSlice'
import friendSlice from './slicers/friendSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    alert: alertSlice,
    friend:friendSlice
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch