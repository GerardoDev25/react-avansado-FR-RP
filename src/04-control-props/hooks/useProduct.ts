import { useState } from 'react';
import { Product, onChangeArgs } from '../interfaces';

interface Props {
  counter: number;
  increaseBy: (value: number) => void;
}

interface useProductArgs {
  onChange?: (args: onChangeArgs) => void;
  product: Product;
}
export const useProduct = ({ product, onChange }: useProductArgs): Props => {
  const [counter, setCounter] = useState(0);

  const increaseBy = (value: number) => {
    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);
    onChange && onChange({ product, count: newValue });
  };
  return { counter, increaseBy };
};
