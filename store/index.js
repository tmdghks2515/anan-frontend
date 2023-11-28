import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userSlice from '@/store/slices/user.slice'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist/es/constants'
import { logger } from 'redux-logger/src'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'theme'],
}

const rootReducer = combineReducers({
  user: userSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

// store 생성 및 export
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
  devTools: process.env.NEXT_PUBLIC_NODE_ENV !== 'production',
})

const setupStore = (context) => store

const makeStore = (context) => setupStore(context)

export const persistor = persistStore(store)
