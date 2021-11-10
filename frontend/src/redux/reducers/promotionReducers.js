import * as actionTypes from '../constants/promotionConstants';

export const getPromotionsReducer = (state = { promotions: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_PROMOTIONS_REQUEST:
      return {
        loading: true,
        promotions: [],
      };
    case actionTypes.GET_PROMOTIONS_SUCCESS:
      return {
        loading: false,
        promotions: action.payload,
      };
    case actionTypes.GET_PROMOTIONS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getPromotionDetailReducer = (
  state = { promotion: {} },
  action
) => {
  switch (action.type) {
    case actionTypes.GET_PROMOTION_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.GET_PROMOTION_DETAILS_SUCCESS:
      return {
        loading: false,
        promotion: action.payload,
      };
    case actionTypes.GET_PROMOTION_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.GET_PROMOTION_DETAILS_RESET:
      return {
        promotion: {},
      };
    default:
      return state;
  }
};
