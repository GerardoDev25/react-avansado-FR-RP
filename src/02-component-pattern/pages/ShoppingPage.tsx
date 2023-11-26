import {
  ProductCard,
  ProductCardButtons,
  ProductCardImage,
  ProductCardTitle,
} from '../Components';

const prodcut = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png',
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <ProductCard product={prodcut}>
          <ProductCardTitle title='hola mundo' />
          <ProductCardImage />
          <ProductCardButtons />
        </ProductCard>
        <ProductCard product={prodcut}>
          <ProductCard.Title />
          <ProductCard.Image />
          <ProductCard.Buttons />
        </ProductCard>
      </div>
    </div>
  );
};
