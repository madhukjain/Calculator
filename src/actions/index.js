import * as actionType from "./ActionTypes";

export const addOperation = () => {
    return {
        type: actionType.ADD_OPERATION,
        payload : '+'
    }
};

export const useNumberOne = () => {
    return {
        type: actionType.VALUE_ONE,
        payload: 1
    }
};

export const getResult = () => {
    return {
        type: actionType.RESULT
    }
};


