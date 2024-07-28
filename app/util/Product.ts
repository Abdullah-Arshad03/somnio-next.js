export interface IProducts {
  title: string;
  description: string;
  image: string;
  price: number;
  id: number;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
}
