import * as actions from "../actions/ActionTypes";
import initialState from "./initialState";

const operationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.ADD :
            if(state.firstNumber === '') {
                state.firstNumber = 0;
            }
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
            return ;

        case actions.RESULT :
            if(state.operation === '+') {
                return Object.assign({}, state, {
                    count : parseInt(state.firstNumber) + parseInt(state.secondNumber),
                    firstNumber : '',
                    secondNumber : '',
                    operation: ''
                })
            }
            if(state.operation === '*') {
                return Object.assign({}, state, {
                    count: parseInt(state.firstNumber) * parseInt(state.secondNumber),
                    firstNumber: '',
                    secondNumber: '',
                    operation: ''
                })
            }

        case actions.MULTIPLY :
            if(state.firstNumber === '') {
                state.firstNumber = 0;
            }
            alert('I am multiply')
            return Object.assign({}, state, { operation : state.operation + '*'});
        default : return state;
    }
};

export default operationsReducer;
