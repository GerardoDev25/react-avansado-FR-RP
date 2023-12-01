import { CSSProperties, ReactElement, createContext } from 'react';

import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';
import {
  Product,
  ProductContextProps,
  onChangeArgs,
} from '../interfaces/interfaces';

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export const ProductsContext = createContext({} as ProductContextProps);
const { Provider } = ProductsContext;

export const ProductCard = (props: Props) => {
  const { product, children, style, className, onChange, value } = props;
  const { counter, increaseBy } = useProduct({ onChange, product, value });
  return (
    <Provider value={{ product, counter, increaseBy }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};
