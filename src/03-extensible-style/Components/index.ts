import { ProductCard as ProductCardHOC } from './ProductCard';
import { ProductCardButtons } from './ProductButtons';
import { ProductCardImage } from './ProductImage';
import { ProductCardTitle } from './ProductTitle';
import { ProductCardHOCPros } from '../interfaces/interfaces';

export * from './ProductCard';
export * from './ProductImage';
export * from './ProductTitle';
export * from './ProductButtons';

export const ProductCard: ProductCardHOCPros = Object.assign(ProductCardHOC, {
  Title: ProductCardTitle,
  Image: ProductCardImage,
  Buttons: ProductCardButtons,
});
