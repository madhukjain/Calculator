import initialState from "./initialState";
import * as actions from "../actions/ActionTypes";

const resultReducer = (state = initialState, action) => {
  switch(action.type){
      case actions.RESULT :
          state.firstNumber = Number(state.firstNumber) + Number(state.secondNumber);
          state.secondNumber = 0;
          return state;
      default : return state;
  }
};

export default resultReducer;
