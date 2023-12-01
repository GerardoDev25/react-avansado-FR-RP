import { useEffect, useRef, useState } from 'react';
import { Product, onChangeArgs } from '../interfaces';

interface Props {
  counter: number;
  increaseBy: (value: number) => void;
}

interface useProductArgs {
  onChange?: (args: onChangeArgs) => void;
  product: Product;
  value?: number;
}
export const useProduct = (props: useProductArgs): Props => {
  const { product, onChange, value = 0 } = props;
  const [counter, setCounter] = useState(value);

  const isControlled = useRef(!!onChange);

  useEffect(() => {
    setCounter(value);
  }, [value]);

  const increaseBy = (valueIncrease: number) => {
    
    if (isControlled.current) {
      console.log('hola');
      return onChange!({ count: valueIncrease, product });
    }
    
    const newValue = Math.max(counter + valueIncrease, 0);
    setCounter(newValue);
    onChange && onChange({ count: newValue, product });
  };
  return { counter, increaseBy };
};
