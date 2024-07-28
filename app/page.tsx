"use client";
import React, { useState, lazy, Suspense } from "react";
import ProductCard from "./components/ProductCard/ProductCard";
import { IProducts } from "./util/Product";
import { useGetProductsQuery } from "./redux/slices/productApiSlice";

const Navbar = lazy(() => import("./components/Navbar/Navbar"));

const HomePage = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products?.filter((product: IProducts) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Suspense fallback={<div>Loading Navbar...</div>}>
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </Suspense>
      <div className="flex justify-center flex-wrap gap-16 w-[85%] m-auto mt-7">
        {isLoading ? (
          <h4>isLoading...</h4>
        ) : error ? (
          <p>{error?.data?.message}</p>
        ) : (
          filteredProducts && (
            <>
              {filteredProducts.map((product: IProducts) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </>
          )
        )}
      </div>
    </>
  );
};

export default HomePage;
