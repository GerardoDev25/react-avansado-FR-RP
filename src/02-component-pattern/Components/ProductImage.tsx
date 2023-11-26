import { useContext } from 'react';
import { ProductsContext } from './ProductCard';

import noImage from '../assets/no-image.jpg';
import style from '../styles/styles.module.css';
import { ProductImageProps } from '../interfaces/interfaces';

export const ProductCardImage = ({ img }: ProductImageProps): JSX.Element => {
  const { product } = useContext(ProductsContext);

  let imgToShow: string;

  if (img) imgToShow = img;
  else if (product.img) imgToShow = product.img;
  else imgToShow = noImage;

  return (
    <img src={imgToShow} alt='product image' className={style.productImg} />
  );
};
