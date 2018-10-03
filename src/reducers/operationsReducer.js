import * as actions from "../actions/ActionTypes";

const operationsReducer = (state = { firstNumber : '', secondNumber : '', count : 0 }, action) => {
    switch (action.type) {
        case actions.ADD :
           return Object.assign({}, state, { count:state.count+1});
        case actions.USE_NUMBER :
            if(state.firstNumber === '') {
                state.firstNumber += action.payload
            } else {
                state.secondNumber += action.payload
            }
        default :
            return state;
    }
};

export default operationsReducer;
