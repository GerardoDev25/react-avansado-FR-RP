import { createContext } from 'react';

import { useProduct } from '../hooks/useProduct';
import style from '../styles/styles.module.css';
import {
  ProductContextProps,
  ProductCardProps,
} from '../interfaces/interfaces';
// import { ProductCardButtons } from './ProductButtons';
// import { ProductCardTitle } from './ProductTitle';
// import { ProductCardImage } from './ProductImage';

export const ProductsContext = createContext({} as ProductContextProps);
const { Provider } = ProductsContext;

export const ProductCard = ({ product, children }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct();
  return (
    <Provider value={{ product, counter, increaseBy }}>
      <div className={style.productCard}>{children}</div>
    </Provider>
  );
};

// ProductCard.Title = ProductCardTitle;
// ProductCard.Image = ProductCardImage;
// ProductCard.Buttons = ProductCardButtons;
