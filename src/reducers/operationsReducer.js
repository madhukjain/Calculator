import * as actions from "../actions/ActionTypes";
import initialState from "./initialState";

const operationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.ADD :
            if(state.firstNumber === '') {
                state.firstNumber = 0;
            }
            return Object.assign({}, state, { operation : state.operation = '+' });

        case actions.USE_NUMBER :
            if((state.firstNumber !== '' && state.operation === '') || state.firstNumber === '') {
                return  Object.assign({}, state, { count : state.firstNumber += action.payload})
            }
            if(state.firstNumber !== '' && state.operation !== ''){
                return  Object.assign({}, state, { count : state.secondNumber += action.payload})
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
            if(state.operation === '/') {
                return Object.assign({}, state, {
                    count: parseInt(state.firstNumber) / parseInt(state.secondNumber),
                    firstNumber: '',
                    secondNumber: '',
                    operation: ''
                })
            }
            if(state.operation === '-') {
                return Object.assign({}, state, {
                    count: parseInt(state.firstNumber) - parseInt(state.secondNumber),
                    firstNumber: '',
                    secondNumber: '',
                    operation: ''
                })
            }


        case actions.MULTIPLY :
            if(state.firstNumber === '') {
                state.firstNumber = 0;
            }
            return Object.assign({}, state, { operation : state.operation = '*'});

        case actions.DIVIDE :
            if(state.firstNumber === '') {
                state.firstNumber = 0;
            }
            return Object.assign({}, state, { operation : state.operation = '/'});

        case actions.SUBTRACT :
            if(state.firstNumber === '') {
                state.firstNumber = 0;
            }
            return Object.assign({}, state, { operation : state.operation = '-'});

        default : return state;
    }
};

export default operationsReducer;
