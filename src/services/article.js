import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY || '84e7d660b2mshd6e5b3c23358728p16f3bcjsn968c8b505e50';


export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set(
                'X-RapidAPI-Key', rapidApiKey
            );
            headers.set(
                'X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com'
            );
            return headers;
        }

    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => `summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`
        })
    })

})
export const { useLazyGetSummaryQuery } = articleApi
