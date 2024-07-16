import { ACTION_TYPE } from "../constant/actionType";

export const increment = (value) => {
  return {
    type: ACTION_TYPE.INCREMENT,
    payload: value,
  };
};

export const decrement = (value) => {
  return {
    type: ACTION_TYPE.DECREMENT,
    payload: value,
  };
};

export const addProduct = (value) => {
  return {
    type: ACTION_TYPE.ADDPRODUCT,
    payload: value,
  };
};

export const QuantityPlus = (value) => {
  return {
    type: ACTION_TYPE.INCREMENTPRODUCT,
    payload: value,
  };
};

export const QuantityMinus = (value) => {
  return {
    type: ACTION_TYPE.DECREMENTPRODUCT,
    payload: value,
  };
};

export const totalPrice = () => {
  return {
    type: ACTION_TYPE.TOTALPRICE,
  };
};

export const totalItem = () => {
  return {
    type: ACTION_TYPE.TOTALITEM,
  };
};

export const deleteItemfromCart = (value) => {
  return {
    type: ACTION_TYPE.DELETEITEMFROMCART,
    payload: value,
  };
};

export const deleteAllFromCart = () => {
  return {
    type: ACTION_TYPE.DELETEALLFROMCART,
  };
};

export const checkOutItems = (value) => {
  return {
    type: ACTION_TYPE.ADDCHECKOUTITEM,
    payload: value,
  };
};
