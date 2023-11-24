import { ReactElement, createContext, useContext } from 'react';

import { useProduct } from '../hooks/useProduct';
import noImage from '../assets/no-image.jpg';
import style from '../styles/styles.module.css';

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}
export interface ProductProps {
  product: Product;
  children?: ReactElement | ReactElement[];
}

export interface Product {
  id: string;
  title: string;
  img?: string;
}

const ProductsContext = createContext({} as ProductContextProps);
const { Provider } = ProductsContext;

export const ProductCardImage = ({ img = '' }): JSX.Element => {
  const { product } = useContext(ProductsContext);

  let imgToShow: string;

  if (img) imgToShow = img;
  else if (product.img) imgToShow = product.img;
  else imgToShow = noImage;

  return (
    <img src={imgToShow} alt='product image' className={style.productImg} />
  );
};

export const ProductCardTitle = ({ title }: { title?: string }) => {
  const { product } = useContext(ProductsContext);

  return (
    <span className={style.productDescription}>
      {title ? title : product.title}
    </span>
  );
};

export const ProductCardButtons = (): JSX.Element => {
  const { counter, increaseBy } = useContext(ProductsContext);
  return (
    <div className={style.buttonsContainer}>
      <button className={style.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={style.countLabel}>{counter}</div>
      <button className={style.buttonAdd} onClick={() => increaseBy(1)}>
        +
      </button>
    </div>
  );
};

export const ProductCard = ({ product, children }: ProductProps) => {
  const { counter, increaseBy } = useProduct();
  return (
    <Provider value={{ product, counter, increaseBy }}>
      <div className={style.productCard}>{children}</div>
    </Provider>
  );
};

ProductCard.Title = ProductCardTitle;
ProductCard.Image = ProductCardImage;
ProductCard.Buttons = ProductCardButtons;
