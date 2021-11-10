import './Navbar.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
// getProducts function from action
import { getProducts } from '../redux/actions/productActions';

const Navbar = ({ click }) => {
  // dispatch
  const dispatch = useDispatch();
  // query text
  const [query, setQuery] = useState('');
  // get cart from state
  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
  };

  const inputChangeHandler = (event) => {
    setQuery(event.target.value);
  };

  const submitHandler = () => {
    // pass query text to get latest product list
    dispatch(getProducts(query));
    // clean input
    setQuery('');
  };

  return (
    <nav className='navbar'>
      {/* logo */}
      <Link to='/'>
        <div className='navbar__logo'>
          <h2>Shopping Web</h2>
        </div>
      </Link>

      {/* links */}
      <ul className='navbar__links'>
        <li>
          <input
            type='text'
            className='navbar__input'
            value={query}
            onChange={inputChangeHandler}
          />
          <button className='navbar__btn' onClick={submitHandler}>
            Search
          </button>
        </li>
        <li>
          <Link to='/'>Shop</Link>
        </li>
        <li>
          <Link to='/promotion'>Promotion</Link>
        </li>
        <li>
          <Link to='/cart' className='cart__link'>
            {/* Icon */}
            <i className='fas fa-shopping-cart'></i>
            <span>
              Cart
              <span className='cartlogo__badge'>{getCartCount()}</span>
            </span>
          </Link>
        </li>
      </ul>

      {/* hamburger menu */}
      <div className='hamburger__menu' onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
