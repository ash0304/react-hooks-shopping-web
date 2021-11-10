import * as actionTypes from '../constants/promotionConstants';
import axios from 'axios';

export const getPromotions = () => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.GET_PROMOTIONS_REQUEST,
    });

    const { data } = await axios.get('/api/promotions');

    dispatch({
      type: actionTypes.GET_PROMOTIONS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PROMOTIONS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getPromotionDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.GET_PROMOTION_DETAILS_REQUEST,
    });

    const { data } = await axios.get(`/api/promotions/${id}`);

    dispatch({
      type: actionTypes.GET_PROMOTION_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PROMOTION_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const removePromotionDetails = () => (dispatch) => {
  dispatch({
    type: actionTypes.GET_PROMOTION_DETAILS_RESET,
  });
};
