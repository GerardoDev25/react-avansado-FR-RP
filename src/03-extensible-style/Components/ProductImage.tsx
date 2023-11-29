import { CSSProperties, useContext } from 'react';
import { ProductsContext } from './ProductCard';

import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

export type Props = {
  img?: string | undefined;
  className?: string;
  style?: CSSProperties;
};

export const ProductCardImage = ({
  img,
  className,
  style,
}: Props): JSX.Element => {
  const { product } = useContext(ProductsContext);

  let imgToShow: string;

  if (img) imgToShow = img;
  else if (product.img) imgToShow = product.img;
  else imgToShow = noImage;

  return (
    <img
      src={imgToShow}
      alt='product image'
      className={`${styles.productImg} ${className}`}
      style={style}
    />
  );
};
