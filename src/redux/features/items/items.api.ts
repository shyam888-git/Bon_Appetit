import { rootApi } from "@/redux/root.api";
import { Items } from "./items";

export const authApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllItems: builder.query<Items,{
            limit?:number;
            offSet?:number;
            ordering?:string;
            search?:string;
            category?:string;
            
        }>({
            query: ({limit,offSet,ordering,search,category}) => ({
                url: `/v1/public/everest-bistro-app/items`,
                method: "GET",
                params:{
                    limit,
                    offSet,
                    ordering,
                    search,
                    category
                }
            }),
            providesTags: ["Category"],
        }),
    }),
});

export const { useGetAllItemsQuery } = authApi;

