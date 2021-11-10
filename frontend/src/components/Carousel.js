import './Carousel.scss';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

// Dependency
import Slider from 'react-slick';

// Actions
import { getPromotions as listPromotions } from '../redux/actions/promotionActions';

const Carousel = () => {
  // react-router's useHistory
  const history = useHistory();
  // dispatch actions
  const dispatch = useDispatch();

  // data from redux(state)
  const Promotions = useSelector((state) => state.getPromotions);
  const { promotions, loading, error } = Promotions;

  useEffect(() => {
    dispatch(listPromotions());
  }, [dispatch]);

  // drag hack method
  let dragging = false;

  // custom next arrow
  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{ ...style }} onClick={onClick}></div>
    );
  };

  // custom prev arrow
  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{ ...style }} onClick={onClick}></div>
    );
  };

  // setting
  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: () => (dragging = true),
    afterChange: () => (dragging = false),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  // navigator to specific promotion
  const promotionHandler = (id) => {
    if (!dragging) {
      history.push(`/promotion/${id}`);
    }
  };

  return (
    <Slider {...setting} className='carousel__container'>
      {loading ? (
        <h2>Loading img...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        promotions.map((promotion) => {
          return (
            <div
              key={promotion._id}
              className='carousel__slide'
              onClick={promotionHandler.bind(null, promotion._id)}
            >
              <div
                className='carousel__content'
                style={{
                  background: `url(${promotion.imgUrl})`,
                  width: '100%',
                  height: '100%',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center center',
                }}
              ></div>
            </div>
          );
        })
      )}
    </Slider>
  );
};

export default Carousel;
