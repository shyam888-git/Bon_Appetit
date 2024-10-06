import { BASE_API_URL } from "@/lib/urlConfig";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const getAuthToken = () => localStorage.getItem("token") || "";
export const rootApi = createApi({
    reducerPath: "root",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_API_URL,
        prepareHeaders: (headers) => {
            // const token = (getState() as RootState).auth.token;
            const token = getAuthToken();
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: () => ({}),
    tagTypes: [

    ],
});
