import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_API_URL } from "@/lib/urlConfig";

export const getAuthToken = () => localStorage.getItem("token") || "";

export const rootApi = createApi({
    reducerPath: "root",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_API_URL,
        prepareHeaders: (headers) => {
            const token = getAuthToken();
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: () => ({}),
    tagTypes: ["Category"],
});

console.log(`${BASE_API_URL}public/everest-bistro-app/categories`);

