import React from "react";
import ProductCard from "./components/ProductCard/ProductCard";
import { IProducts } from "./util/Product";
import axios from "axios";
import { useGetProductsQuery } from "./redux/slices/productApiSlice";

const HomePage = async () => {
  const products = await axios.get("https://fakestoreapi.com/products");
  console.log("products", products);

  const { data, isLoading, error } = useGetProductsQuery({});
  console.log("these are the fetched products", data);

  return (
    <>
      <div className="flex justify-center flex-wrap gap-16 w-[85%] m-auto mt-7">
        {products.data.map((product: IProducts) => (
          <ProductCard
            imageUrl={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </>
  );
};

export default HomePage;
