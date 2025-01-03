import { rootApi } from "@/redux/root.api";

export const authApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllCategories: builder.query({
            query: () => ({
                url: `/v1/public/everest-bistro-app/categories`,
                method: "GET",
            }),
            providesTags: ["Category"],
        }),
    }),
});

export const { useGetAllCategoriesQuery } = authApi;

