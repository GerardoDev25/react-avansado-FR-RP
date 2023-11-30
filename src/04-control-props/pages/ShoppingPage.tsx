import {
  ProductCard,
  ProductCardButtons,
  ProductCardImage,
  ProductCardTitle,
} from '../Components';
import { Product, onChangeArgs } from '../interfaces';
import '../styles/costume.style.css';

const product1 = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png',
};

const product2 = {
  id: '2',
  title: 'Coffee Mug - meme',
  img: './coffee-mug2.png',
};

const products: Product[] = [product1, product2];

export const ShoppingPage = () => {
  const onProductCountChange = ({ product, count }: onChangeArgs) => {
    console.log({ product, count });
  };

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
        <ProductCard
          product={product2}
          className='bg-dark text-white'
          style={{ width: '100px' }}
          // onChange={() => onProductCountChange()}
        >
          <ProductCardImage
            className='costume-image'
            style={{ boxShadow: '10px' }}
          />
          <ProductCardButtons className='costume-buttons' />
        </ProductCard>
        <ProductCard
          product={product1}
          className='bg-dark text-white'
          style={{ width: '100px' }}
        >
          <ProductCardImage
            className='costume-image'
            style={{ boxShadow: '10px' }}
          />
          <ProductCardButtons className='costume-buttons' />
        </ProductCard>
      </div>
    </div>
  );
};
