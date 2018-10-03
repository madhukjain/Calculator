import * as actions from "../actions/ActionTypes";
import initialState from "./initialState";

const operationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.ADD :
           return Object.assign({}, state, { operation : state.operation + '+' });
        case actions.USE_NUMBER :
            if((state.firstNumber !== '' && state.operation === '') || state.firstNumber === '') {
                state.firstNumber += action.payload;
                return  Object.assign({}, state, { count : state.firstNumber})
            }
            if(state.firstNumber !== '' && state.operation !== ''){
                state.secondNumber += action.payload;
                return  Object.assign({}, state, { count : state.secondNumber})
            }
        default : return state;
    }
};

export default operationsReducer;
