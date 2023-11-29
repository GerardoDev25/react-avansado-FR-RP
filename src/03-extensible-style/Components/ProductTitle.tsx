import { CSSProperties, useContext } from 'react';
import { ProductsContext } from './ProductCard';

import styles from '../styles/styles.module.css';

export interface Props {
  title?: string;
  className?: string;
  style?: CSSProperties;
}

export const ProductCardTitle = ({ title, className, style }: Props) => {
  const { product } = useContext(ProductsContext);

  return (
    <span className={`${styles.productDescription} ${className}`} style={style}>
      {title ? title : product.title}
    </span>
  );
};
