"use client";
import React from "react";
import ProductCard from "./components/ProductCard/ProductCard";
import { IProducts } from "./util/Product";
import axios from "axios";
import { useGetProductsQuery } from "./redux/slices/productApiSlice";

const HomePage = () => {
  // const products = await axios.get("https://fakestoreapi.com/products");
  // console.log("products", products);

  const { data: products, isLoading, error } = useGetProductsQuery();
  console.log("these are the fetched products", products);

  return (
    <>
      <div className="flex justify-center flex-wrap gap-16 w-[85%] m-auto mt-7">
        {isLoading ? (
          <h4>isLoading...</h4>
        ) : error ? (
          <p>{error?.data?.message}</p>
        ) : (
          products && (
            <>
              {products.map((product: IProducts) => (
                <ProductCard product={product} />
              ))}
            </>
          )
        )}
      </div>
    </>
  );
};

export default HomePage;
