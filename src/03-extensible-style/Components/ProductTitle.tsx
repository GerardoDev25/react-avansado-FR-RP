import { useContext } from 'react';
import { ProductsContext } from './ProductCard';

import style from '../styles/styles.module.css';
import { ProductTitlePros } from '../interfaces/interfaces';

export const ProductCardTitle = ({ title }: ProductTitlePros) => {
  const { product } = useContext(ProductsContext);

  return (
    <span className={style.productDescription}>
      {title ? title : product.title}
    </span>
  );
};
