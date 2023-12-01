import { Props as ProductCardProps } from '../Components/ProductCard';
import { Props as ProductImageProps } from '../Components/ProductImage';
import { Props as ProductTitleProps } from '../Components/ProductTitle';
import { Props as ProductButtonsProps } from '../Components/ProductButtons';

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductCardHOCPros {
  (props: ProductCardProps): JSX.Element;
  Title: (props: ProductTitleProps) => JSX.Element;
  Image: (props: ProductImageProps) => JSX.Element;
  Buttons: (props: ProductButtonsProps) => JSX.Element;
}

export interface onChangeArgs {
  product: Product;
  count: number;
}


export interface ProductInCart extends Product {
  count: number;
}