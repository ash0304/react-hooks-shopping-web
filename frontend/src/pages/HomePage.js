import './HomePage.scss';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Components
import Product from '../components/Product';
import Carousel from '../components/Carousel';

// Actions
import { getProducts as listProducts } from '../redux/actions/productActions';

const HomePage = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className='homepage'>
      {/* Carousel Component */}
      <Carousel />
      <h2 className='homepage__title'>Latest Products</h2>
      <div className='homepage__products'>
        {loading ? (
          <h2>Loading ...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => {
            return (
              <Product
                key={product._id}
                productId={product._id}
                imageUrl={product.imageUrl}
                name={product.name}
                price={product.price}
                description={product.description}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default HomePage;
