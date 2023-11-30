import { useState } from 'react';

interface Props {
  counter: number;
  increaseBy: (value: number) => void;
}

export const useProduct = (): Props => {
  const [counter, setCounter] = useState(0);

  const increaseBy = (value: number) => {
    setCounter(Math.max(counter + value, 0));
  };

  return { counter, increaseBy };
};
