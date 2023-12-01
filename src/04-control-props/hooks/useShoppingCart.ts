import { useState } from 'react';
import { ProductInCart, onChangeArgs } from '../interfaces';

export const useShoppingCart = () => {
  const [shoppinCart, setShoppinCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({ count, product }: onChangeArgs) => {
    setShoppinCart((oldShoppingCart) => {
      const productInCart: ProductInCart = oldShoppingCart[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return { ...oldShoppingCart, [product.id]: productInCart };
      }

      // ? borrar el producto del carrito
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { [product.id]: toDelete, ...rest } = oldShoppingCart;
      return rest;
    });
  };
  return { shoppinCart, onProductCountChange };
};
