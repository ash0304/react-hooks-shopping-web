import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Reducers
import { cartReducer } from './reducers/cartReducers';
import {
  getProductsReducer,
  getProductDetailsReducer,
} from './reducers/productReducers';
import {
  getPromotionsReducer,
  getPromotionDetailReducer
} from './reducers/promotionReducers';

// reducer
const reducer = combineReducers({
  cart: cartReducer,
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
  getPromotions: getPromotionsReducer,
  getPromotionDetails: getPromotionDetailReducer,
});

// middleware
const middleware = [thunk];

const cartFromLocalStorage = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : [];

const INITIAL_STATE = {
  cart: {
    cartItems: cartFromLocalStorage,
  },
};

// store
const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
