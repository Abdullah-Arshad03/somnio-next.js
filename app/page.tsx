"use client";
import React, { useState, lazy, Suspense } from "react";
import ProductCard from "./components/ProductCard/ProductCard";
import { IProducts } from "./util/Product";
import { useGetProductsQuery } from "./redux/slices/productApiSlice";

const Navbar = lazy(() => import("./components/Navbar/Navbar"));

const HomePage = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();
  const [searchTerm, setSearchTerm] = useState("");
  const [productsToShow, setProductsToShow] = useState(3);
  const incrementStep = 3;

  const filteredProducts = products?.filter((product: IProducts) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSeeMore = () => {
    setProductsToShow(productsToShow + incrementStep);
  };

  return (
    <>
      <Suspense fallback={<div>Loading Navbar...</div>}>
        <Navbar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          home={true}
        />
      </Suspense>
      <div className="flex justify-center flex-wrap gap-16 w-[85%] m-auto mt-7">
        {isLoading ? (
          <h4>isLoading...</h4>
        ) : error ? (
          <p>Error: Products not fetched</p>
        ) : (
          filteredProducts && (
            <>
              {filteredProducts
                .slice(0, productsToShow)
                .map((product: IProducts) => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </>
          )
        )}
      </div>
      {filteredProducts && productsToShow < filteredProducts.length && (
        <div className="flex justify-center mt-7">
          <button
            onClick={handleSeeMore}
            className="px-6 py-2 bg-gray-200 text-black rounded"
          >
            SEE MORE
          </button>
        </div>
      )}
    </>
  );
};

export default HomePage;
