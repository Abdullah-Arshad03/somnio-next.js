import { apiSlice } from "./apiSlice";
import { API_URL } from "../constants";
import { url } from "inspector";
import { IProducts } from "@/app/util/Product";

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<IProducts[], void>({
      query: () => ({
        url: `${API_URL}`,
      }),
      keepUnusedDataFor: 5,
      providesTags: ["Product"],
    }),
  }),
});

export const { useGetProductsQuery } = productApiSlice;
