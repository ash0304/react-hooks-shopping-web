import './SideDrawer.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

// getProduct from action
import { getProducts } from '../redux/actions/productActions';

const SideDrawer = ({ show, click }) => {
  // dispatch
  const dispatch = useDispatch();
  // query text
  const [query, setQuery] = useState('');
  const sideDrawerClass = ['sidedrawer'];

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const inputChangeHandler = (event) => {
    setQuery(event.target.value);
  };

  const submitHandler = () => {
    // pass query text to get latest product list
    dispatch(getProducts(query));
    // clean input
    setQuery('');
    // close siderdrawer
    click();
  };

  if (show) {
    sideDrawerClass.push('show');
  }

  return (
    <div className={sideDrawerClass.join(' ')}>
      <ul className='sidedrawer__links' onClick={click}>
        <li>
          <div onClick={(e) => e.stopPropagation()}>
            <input
              type='text'
              className='siderdrawer__input'
              value={query}
              onChange={inputChangeHandler}
            />
            <button className='siderdrawer__btn' onClick={submitHandler}>
              Search
            </button>
          </div>
        </li>
        <li>
          <Link to='/cart'>
            <i className='fas fa-shopping-cart'></i>
            <span>
              Cart{' '}
              <span className='sidedrawer__cartbadge'>{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to='/'>Shop</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideDrawer;
