import { useContext } from "react";
import { ProductsContext } from "./ProductCard";

import style from '../styles/styles.module.css';


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
