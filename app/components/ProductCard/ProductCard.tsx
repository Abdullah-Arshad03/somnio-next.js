"use client";

import { IProducts } from "@/app/util/Product";
import {
  Card,
  ImageContainer,
  AddButton,
  Image,
  InfoContainer,
  PriceTag,
  Title,
  Description,
} from "./CardStyling";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/redux/slices/cartSlice";

interface ProductCard {
  product: IProducts;
}

const ProductCard = ({ product }: ProductCard) => {
  const getPriceColor = (price: number) => {
    if (price > 100) return "#9370DB";
    if (price > 50) return " #AAA778";
    return "#8BC5CB";
  };
  const dispatch = useDispatch();
  const onClickHandler = () => {
    console.log("this is the button : ");
    dispatch(addToCart({ ...product, qty: 1 }));
  };
  return (
    <Card>
      <ImageContainer>
        <Image src={product.image} alt={product.title} />
        <AddButton onClick={onClickHandler}>+</AddButton>
        <PriceTag bgcolor={getPriceColor(product.price)}>
          USD {product.price}
        </PriceTag>
      </ImageContainer>
      <InfoContainer>
        <Title>{product.title}</Title>
        <Description>{product.description}</Description>
      </InfoContainer>
    </Card>
  );
};

export default ProductCard;
