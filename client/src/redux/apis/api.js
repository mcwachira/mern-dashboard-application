import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = import.meta.env.VITE_API_BASE_URL
console.log(API_URL)
export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    reducerPath: 'adminApi',
    tagTypes: ['User', 'Products', 'Customers', 'Transactions', 'Geography', 'OverallStats', 'Performance', 'Dashboard'],
    endpoints: (build) => ({
        getUser: build.query({
            query: (id) => `general/user/${id}`,
            providedTags: ['User']
        }),

        getProducts: build.query({
            query: () => `client/products`,
            providedTags: ['Products']
        }),

        getCustomers: build.query({
            query: () => `client/customers`,
            providedTags: ['Customers']
        }),
        getTransactions: build.query({
            query: ({ page, pageSize, sort, search }) => ({
                url: `transactions/data`,
                method: 'GET',
                params: { page, pageSize, sort, search }
            }),
            providedTags: ['Transactions']
        }),
        getGeography: build.query({
            query: () => `geography/data`,
            providedTags: ['Geography']
        }),
        getOverallStats: build.query({
            query: () => `stats/data`,
            providedTags: ['OverallStats']
        }),
        getAdmins: build.query({
            query: () => `admin/data`,
            providedTags: ['Admin']
        }),
        getUserPerformance: build.query({
            query: (id) => `/performance/${id}`,
            providedTags: ['Performance']
        }),
        getDashboard: build.query({
            query: (id) => `/general/dashboard`,
            providedTags: ['Dashboard']
        }),
    })
})
export const {
    useGetUserQuery,
    useGetProductsQuery,
    useGetCustomersQuery,
    useGetTransactionsQuery,
    useGetGeographyQuery,
    useGetOverallStatsQuery,
    useGetAdminsQuery,
    useGetUserPerformanceQuery,
    useGetDashboardQuery,
} = api