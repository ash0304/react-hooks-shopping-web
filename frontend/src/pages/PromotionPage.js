import './PromotionPage.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

// Action
import { getPromotions as listPromotions } from '../redux/actions/promotionActions';
import { useHistory } from 'react-router';

const PromotionPage = () => {
  // history
  const history = useHistory();
  // dispatch
  const dispatch = useDispatch();
  // selector
  const getPromotions = useSelector((state) => state.getPromotions);
  const { promotions, loading, error } = getPromotions;

  useEffect(() => {
    dispatch(listPromotions());
  }, [dispatch]);

  const promotionHandler = (id) => {
    history.push(`/promotion/${id}`);
  };

  return (
    <div className='promotionPage'>
      <div className='promotionPage__container'>
        {loading ? (
          <h2>Loading ...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          promotions.map((promotion) => {
            return (
              <div className='promotionPage__item' key={promotion._id}>
                <div
                  className='promotionPage__top'
                  style={{
                    background: `url(${promotion.imgUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                  }}
                ></div>
                <div className='promotionPage__bottom'>
                  <div className='promotionPage__left'>
                    <div className='promotionPage__title'>
                      {promotion.title}
                    </div>
                    <div className='promotionPage__time'>{`${promotion.startDate} ~ ${promotion.endDate}`}</div>
                  </div>
                  <div className='promotionPage__right'>
                    <div
                      className='promotionPage__btn'
                      onClick={promotionHandler.bind(null, promotion._id)}
                    >
                      Detail
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default PromotionPage;
