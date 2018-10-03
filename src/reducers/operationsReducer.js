import * as actions from "../actions/ActionTypes";

const operationsReducer = (state = {count : 1}, action) => {
    switch (action.type) {
        case actions.ADD :
           return Object.assign({},state,{count:state.count+1});
        default :
            return state;
    }
};

export default operationsReducer;
