import './PromotionPage.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

// Action
import { getPromotions as listPromotions } from '../redux/actions/promotionActions';
import PromotionItem from '../components/PromotionItem';

const PromotionPage = () => {
  // dispatch
  const dispatch = useDispatch();
  // selector
  const getPromotions = useSelector((state) => state.getPromotions);
  const { promotions, loading, error } = getPromotions;

  useEffect(() => {
    dispatch(listPromotions());
  }, [dispatch]);

  return (
    <div className='promotionPage'>
      <div className='promotionPage__container'>
        {loading ? (
          <h2>Loading ...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          promotions.map((promotion) => {
            return <PromotionItem key={promotion._id} promotion={promotion} />;
          })
        )}
      </div>
    </div>
  );
};

export default PromotionPage;
