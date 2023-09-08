import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slicers/auth/authSlice'
import alertSlice from './slicers/alertSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    alert: alertSlice
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch