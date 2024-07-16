import { checkOutItems, totalItem, totalPrice } from "../actions";
import { ACTION_TYPE } from "../constant/actionType";

const initialState = {
  productList: [],
  checkOutList: [],
  totalPrice: 0,
  totalItem: 0,
  totalCheckOutItem: 0,
  totalCheckOutPrice: 0,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE.ADDPRODUCT:
      let flag = false;
      if (state.productList.length > 0) {
        for (let i = 0; i < state.productList.length; i++) {
          console.log("action", action.payload.id);
          console.log("state", state.productList[i].id);
          console.log(
            "compare",
            state.productList[i].id,
            "==",
            action.payload.id
          );
          if (state.productList[i].id !== action.payload.id) {
            flag = true;
          } else {
            flag = false;
            break;
          }
        }
      } else {
        state.productList.push(action.payload);
      }
      console.log("flag", flag);
      if (flag === true) {
        state.productList.push(action.payload);
        flag = false;
      }

      return {
        ...state,
      };

    case ACTION_TYPE.DELETEPRODUCT:
      return {
        isData: state.isData - action.payload,
      };

    case ACTION_TYPE.INCREMENTPRODUCT:
      let updateCart = state.productList.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      return {
        ...state,
        productList: updateCart,
      };

    case ACTION_TYPE.DECREMENTPRODUCT:
      let updatedCart = state.productList
        .map((item) => {
          if (item.id === action.payload) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((ite) => ite.quantity !== 0);
      return {
        ...state,
        productList: updatedCart,
      };

    case ACTION_TYPE.TOTALPRICE:
      const total = state.productList.reduce((acc, curr) => {
        let { price } = curr;
        let { quantity } = curr;
        price = price * quantity;
        acc += price;
        return acc;
      }, 0);
      return {
        ...state,
        totalPrice: total,
      };

    case ACTION_TYPE.TOTALITEM:
      const totalItems = state.productList.reduce((acc, curr) => {
        let { quantity } = curr;
        acc += quantity;
        return acc;
      }, 0);
      return {
        ...state,
        totalItem: totalItems,
      };

    case ACTION_TYPE.DELETEITEMFROMCART:
      const update = state.productList.filter(
        (item) => item.id !== action.payload
      );

      return {
        ...state,
        productList: update,
        totalItem: update.length,
      };

    case ACTION_TYPE.DELETEALLFROMCART:
      return {
        ...state,
        productList: [],
        totalItem: 0,
        totalPrice: 0.0,
      };

    case ACTION_TYPE.ADDCHECKOUTITEM:
      state.checkOutList.push(action.payload);
      const totalCheckOutPrices = state.checkOutList.reduce((acc, curr) => {
        let { quantity } = curr;
        let { price } = curr;
        price = price * quantity;
        acc += price;
        return acc;
      }, 0);
      const totalCheckOutItems = state.checkOutList.reduce((acc, curr) => {
        let { quantity } = curr;
        acc += quantity;
        return acc;
      }, 0);
      return {
        ...state,
        totalCheckOutItem: totalCheckOutItems,
        totalCheckOutPrice: totalCheckOutPrices,
      };

    default:
      return state;
  }
};

export default productReducer;
