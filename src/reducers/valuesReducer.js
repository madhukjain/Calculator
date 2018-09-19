import initialState from "./initialState";
import * as actions from "../actions/ActionTypes";

const valuesReducer = (state = initialState, action) => {
  switch (action.type) {
      case actions.VALUE_ONE:
          if(state.operation === ''){
              state.firstNumber = (state.firstNumber + action.payload).toString();
              return state;
          } else {
              state.secondNumber = (state.secondNumber + action.payload).toString();
              return state;
          }
      default : return state;
  }
};

export default valuesReducer;
