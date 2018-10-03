import * as actionType from "./ActionTypes";

export const increase = () => {
    return {
        type: actionType.ADD,
    }
};

export const useNumber = (payload) => {
    return {
      type: actionType.USE_NUMBER,
      payload: payload
    }
};

export const getResult = () => {
    return {
        type: actionType.RESULT
    }
};
