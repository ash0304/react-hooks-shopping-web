import './PromotionDetailPage.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

// Actions
import { getPromotionDetails } from '../redux/actions/promotionActions';

const PromotionDetailPage = ({ match }) => {
  // params
  const id = match ? match.params.id : null;
  // dispatch
  const dispatch = useDispatch();

  const promotionDetails = useSelector((state) => state.getPromotionDetails);
  const { promotion, error, loading } = promotionDetails;

  useEffect(() => {
    if (promotion && id !== promotion._id && id) {
      dispatch(getPromotionDetails(id));
    }
  }, [dispatch, promotion, id]);

  return (
    <div className='promotionDetailPage'>
      {loading ? (
        <h2>Loading ...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div
            style={{
              background: `url(${promotion.imgUrl})`,
              width: '100%',
              height: '600px',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
            }}
          ></div>
          <div className='promotionDetailPage__content'>
            <div className='promotionDetailPage__title'>{promotion.title}</div>
            <div className='promotionDetailPage__time'>{`${promotion.startDate} ~ ${promotion.endDate}`}</div>
            <div className='promotionDetailPage__description'>
              {promotion.description}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PromotionDetailPage;
