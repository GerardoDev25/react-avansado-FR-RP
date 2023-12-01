import {
  ProductCard,
  ProductCardButtons,
  ProductCardImage,
  ProductCardTitle,
} from '../Components';

import '../styles/costume.style.css';
import { products } from '../data/product';
import { useShoppingCart } from '../hooks/useShoppingCart';

export const ShoppingPage = () => {
  const { shoppinCart, onProductCountChange } = useShoppingCart();

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className='bg-dark text-white'
            value={shoppinCart[product.id]?.count || 0}
            onChange={onProductCountChange}
          >
            <ProductCardImage
              className='costume-image'
              style={{ boxShadow: '10px' }}
            />
            <ProductCardTitle className='text-bold' />
            <ProductCardButtons className='costume-buttons' />
          </ProductCard>
        ))}
      </div>

      <div className='shopping-card'>
        {Object.entries(shoppinCart).map(([key, product]) => (
          <ProductCard
            key={key}
            product={product}
            className='bg-dark text-white'
            style={{ width: '100px' }}
            value={product.count}
            onChange={onProductCountChange}
          >
            <ProductCardImage
              className='costume-image'
              style={{ boxShadow: '10px' }}
            />
            <ProductCardButtons
              className='costume-buttons'
              style={{ display: 'flex', justifyContent: 'center' }}
            />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
