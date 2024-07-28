import styled from "styled-components";

interface PriceTagProps {
  bgcolor: string;
}
export const Card = styled.div`
  width: 300px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background: #fff;
  margin: 16px; /* Add margin to create spacing between cards */
  cursor: pointer; /* Change cursor to indicate the card is clickable */
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 300px; /* Adjust height to match your design */
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the image covers the container while maintaining aspect ratio */
`;

export const AddButton = styled.button`
  position: absolute;
  top: 8px;
  left: 8px;
  background: #fff;
  border: none;
  border-radius: 50%;
  width: 32px; /* Adjust size to match the design */
  height: 32px; /* Adjust size to match the design */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 24px; /* Adjust font size to match the design */
`;

export const InfoContainer = styled.div`
  padding: 16px;
`;

export const PriceTag = styled.div<PriceTagProps>`
  background: ${(props): string => props.bgcolor};
  color: black;
  padding: 4px 8px;
  border-radius: 4px;
  position: absolute;
  bottom: 8px;
  right: 8px;
  font-weight: bold;
  font-size: 16px; /* Adjust font size to match the design */
`;

export const Title = styled.h3`
  font-size: 18px;
  margin: 0;
  margin-bottom: 8px;
`;

export const Description = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
