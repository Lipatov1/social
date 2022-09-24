import { rtkApi } from '@/shared/api/rtkApi';
import { Article } from '@/entities/Article';

const recommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecommendationsList: build.query<Article[], number>({
            query: (limit) => ({
                url: '/articles',
                params: {
                    _limit: limit,
                    _expand: 'user',
                    _sort: 'views',
                    _order: 'asc',
                },
            }),
        }),
    }),
});

export const useArticleRecommendationsList =
    recommendationsApi.useGetArticleRecommendationsListQuery;
