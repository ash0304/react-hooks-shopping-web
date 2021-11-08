import './HomePage.scss';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Slider from 'react-slick';

// Components
import Product from '../components/Product';

// Actions
import { getProducts as listProducts } from '../redux/actions/productActions';

const HomePage = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className='homepage'>
      <Slider {...settings} className='carousel__containter'>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
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
