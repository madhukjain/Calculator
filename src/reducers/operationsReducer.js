import * as actions from "../actions/ActionTypes";
import initialState from "./initialState";

const operationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.ADD_OPERATION :
            state.operation = action.payload;
            return state;
        default : return state;
    }
};

export default operationsReducer;
