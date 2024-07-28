import { apiSlice } from "./apiSlice";
import { API_URL } from "../constants";
import { url } from "inspector";

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (): any => ({
        url: `${API_URL}`;
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetProductsQuery } = productApiSlice;
