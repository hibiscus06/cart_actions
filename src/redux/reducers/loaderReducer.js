import { ACTION_TYPE } from "../constant/actionType";

const initialState = {
  isData: 0,
};

const incrementReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE.INCREMENT:
      return {
        isData: state.isData + action.payload,
        //...state,
        // isData: action.payload,
      };

    case ACTION_TYPE.DECREMENT:
      return {
        isData: state.isData - action.payload,
      };

    default:
      return state;
  }
};

export default incrementReducer;
