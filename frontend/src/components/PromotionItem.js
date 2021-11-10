import './PromotionItem.scss';
import { useHistory } from 'react-router';

const PromotionItem = ({ promotion }) => {
  // props
  const { _id, imgUrl, title, startDate, endDate } = promotion;
  // history
  const history = useHistory();

  const promotionHandler = (id) => {
    history.push(`/promotion/${id}`);
  };

  return (
    <div className='promotionPage__item' key={_id}>
      <div
        className='promotionPage__top'
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      ></div>
      <div className='promotionPage__bottom'>
        <div className='promotionPage__left'>
          <div className='promotionPage__title'>{title}</div>
          <div className='promotionPage__time'>{`${startDate} ~ ${endDate}`}</div>
        </div>
        <div className='promotionPage__right'>
          <div
            className='promotionPage__btn'
            onClick={promotionHandler.bind(null, _id)}
          >
            Detail
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionItem;
