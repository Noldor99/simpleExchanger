import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'
import { rateApi } from './redusers/rateApi'
import { rateReducer } from './redusers/ratesSlice'

 
 

export const store = configureStore({
  reducer: {
    rates: rateReducer,
    [rateApi.reducerPath]: rateApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(rateApi.middleware)
})

setupListeners(store.dispatch)

// export type RootState = ReturnType<typeof store.getState>