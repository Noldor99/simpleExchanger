import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
 
export const rateApi = createApi({
  reducerPath: 'placeholder/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.privatbank.ua/p24api/', 
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Origin':'http://localhost:3000',
  },
  mode: 'cors',
  dataType: 'jsonp',
  }),
  refetchOnFocus: false,
  endpoints: build => ({ 
    getRates:build.query({
      query: () => ({
        url: 'pubinfo?json&exchange&coursid=5',
        method: 'GET'
      }),
    }),
  })
})

export const {
  useLazyGetRatesQuery,
  useGetRatesQuery
} = rateApi