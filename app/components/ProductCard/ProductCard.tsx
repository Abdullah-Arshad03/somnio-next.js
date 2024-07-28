"use client";

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

interface ProductCard {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
}

const ProductCard = ({ imageUrl, title, description, price }: ProductCard) => {
  const getPriceColor = (price: number) => {
    if (price > 100) return "#9370DB";
    if (price > 50) return " #AAA778";
    return "#8BC5CB";
  };

  return (
    <Card>
      <ImageContainer>
        <Image src={imageUrl} alt={title} />
        <AddButton>+</AddButton>
        <PriceTag bgcolor={getPriceColor(price)}>USD {price}</PriceTag>
      </ImageContainer>
      <InfoContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </InfoContainer>
    </Card>
  );
};

export default ProductCard;
