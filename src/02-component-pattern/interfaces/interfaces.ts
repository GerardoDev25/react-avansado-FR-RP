import { ReactElement } from 'react';

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}
export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];
}

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export type ProductImageProps = {
  img?: string | undefined;
};
export type ProductTitlePros = { title?: string };

export interface ProductCardHOCPros {
  ({ children, product }: ProductCardProps): JSX.Element;
  Title: ({ title }: ProductTitlePros) => JSX.Element;
  Image: ({ img }: ProductImageProps) => JSX.Element;
  Buttons: () => JSX.Element;
}
